import React from 'react'
import { useNetworkStatus } from '../hooks/useNetworkStatus'

export function OfflineIndicator() {
  const isOnline = useNetworkStatus()

  if (isOnline) return null

  return (
    <div className="offline-indicator">
      ⚡ You are offline. Changes will sync when connection returns.
    </div>
  )
}