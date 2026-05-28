import { useState, useEffect } from 'react'
import { syncService } from '../services/syncService'
import { useNetworkStatus } from './useNetworkStatus'

export function useSync() {
  const [isSyncing, setIsSyncing] = useState(false)
  const [pendingCount, setPendingCount] = useState(0)
  const isOnline = useNetworkStatus()

  useEffect(() => {
    const checkPendingSync = async () => {
      const db = (await import('../services/db')).default
      const count = await db.syncQueue.count()
      setPendingCount(count)
    }
    
    checkPendingSync()
    
    // Listen for sync events
    const handleSyncComplete = () => {
      checkPendingSync()
      setIsSyncing(false)
    }
    
    window.addEventListener('sync-complete', handleSyncComplete)
    return () => window.removeEventListener('sync-complete', handleSyncComplete)
  }, [])

  const triggerSync = async () => {
    if (!isOnline) {
      console.log('Cannot sync while offline')
      return false
    }
    
    setIsSyncing(true)
    try {
      await syncService.syncJobsWithServer()
      window.dispatchEvent(new Event('sync-complete'))
      return true
    } catch (error) {
      console.error('Sync failed:', error)
      setIsSyncing(false)
      return false
    }
  }

  return { isSyncing, pendingCount, triggerSync }
}