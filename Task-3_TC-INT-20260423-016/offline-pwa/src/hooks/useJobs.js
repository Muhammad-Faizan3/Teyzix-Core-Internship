import { useState, useEffect, useCallback } from 'react'
import { liveQuery } from 'dexie'
import db from '../services/db'
import { api } from '../services/api'
import { syncService } from '../services/syncService'
import { useNetworkStatus } from './useNetworkStatus'

export function useJobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const isOnline = useNetworkStatus()

  useEffect(() => {
    // Subscribe to IndexedDB changes
    const subscription = liveQuery(() => db.jobs.toArray()).subscribe({
      next: (data) => {
        setJobs(data)
        setLoading(false)
      },
      error: (error) => {
        console.error('Database error:', error)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  // Sync with server when online
  useEffect(() => {
    if (isOnline) {
      syncService.syncJobsWithServer().catch(console.error)
    }
  }, [isOnline])

  const addJob = useCallback(async (jobData) => {
    const newJob = {
      id: Date.now().toString(),
      ...jobData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      syncStatus: 'pending'
    }
    
    await db.jobs.add(newJob)
    
    if (isOnline) {
      try {
        const result = await api.createJob(newJob)
        await db.jobs.update(newJob.id, { 
          id: result.id,
          syncStatus: 'synced' 
        })
      } catch (error) {
        await syncService.addToSyncQueue('CREATE', newJob.id, newJob)
      }
    } else {
      await syncService.addToSyncQueue('CREATE', newJob.id, newJob)
    }
    
    return newJob
  }, [isOnline])

  const updateJob = useCallback(async (id, updates) => {
    const existing = await db.jobs.get(id)
    if (!existing) throw new Error('Job not found')
    
    const updatedJob = {
      ...existing,
      ...updates,
      updatedAt: new Date().toISOString(),
      syncStatus: 'pending'
    }
    
    await db.jobs.put(updatedJob)
    
    if (isOnline) {
      try {
        await api.updateJob(id, updatedJob)
        await db.jobs.update(id, { syncStatus: 'synced' })
      } catch (error) {
        await syncService.addToSyncQueue('UPDATE', id, updatedJob)
      }
    } else {
      await syncService.addToSyncQueue('UPDATE', id, updatedJob)
    }
    
    return updatedJob
  }, [isOnline])

  const getJob = useCallback(async (id) => {
    return await db.jobs.get(id)
  }, [])

  return { jobs, loading, addJob, updateJob, getJob }
}