import db from './db'
import { api } from './api'

class SyncService {
  constructor() {
    this.isSyncing = false
    this.setupBackgroundSync()
  }

  async setupBackgroundSync() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      const registration = await navigator.serviceWorker.ready
      try {
        await registration.sync.register('sync-jobs')
      } catch (error) {
        console.log('Background sync registration failed:', error)
      }
    }
  }

  async addToSyncQueue(type, jobId, payload) {
    await db.syncQueue.add({
      type,
      jobId,
      payload,
      timestamp: new Date().toISOString(),
      retryCount: 0
    })
    
    // Trigger background sync if available
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      const registration = await navigator.serviceWorker.ready
      await registration.sync.register('sync-jobs')
    }
  }

  async processSyncQueue() {
    if (this.isSyncing) return
    this.isSyncing = true

    try {
      const queueItems = await db.syncQueue.toArray()
      
      for (const item of queueItems) {
        try {
          let result
          switch (item.type) {
            case 'CREATE':
              result = await api.createJob(item.payload)
              if (result && result.id) {
                await db.jobs.update(item.jobId, { 
                  id: result.id,
                  syncStatus: 'synced'
                })
              }
              break
            case 'UPDATE':
              await api.updateJob(item.jobId, item.payload)
              await db.jobs.update(item.jobId, { syncStatus: 'synced' })
              break
          }
          
          // Remove from queue on success
          await db.syncQueue.delete(item.id)
        } catch (error) {
          // Increment retry count, remove if too many retries
          if (item.retryCount >= 3) {
            await db.syncQueue.delete(item.id)
            console.error('Sync failed permanently:', item)
          } else {
            await db.syncQueue.update(item.id, { 
              retryCount: item.retryCount + 1 
            })
          }
        }
      }
    } finally {
      this.isSyncing = false
    }
  }

  async syncJobsWithServer() {
    try {
      // Fetch latest jobs from server
      const serverJobs = await api.getJobs()
      
      // Simple conflict resolution: server wins for existing jobs
      for (const serverJob of serverJobs) {
        const localJob = await db.jobs.get(serverJob.id)
        if (!localJob || new Date(serverJob.updatedAt) > new Date(localJob.updatedAt)) {
          await db.jobs.put({ ...serverJob, syncStatus: 'synced' })
        }
      }
      
      // Process any pending sync queue items
      await this.processSyncQueue()
    } catch (error) {
      console.log('Sync failed, will retry later:', error)
      throw error
    }
  }
}

export const syncService = new SyncService()