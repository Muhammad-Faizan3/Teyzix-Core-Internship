import React, { useEffect } from 'react'
import { useJobs } from '../hooks/useJobs'
import { useSync } from '../hooks/useSync'
import { useNetworkStatus } from '../hooks/useNetworkStatus'
import { useNotifications } from '../hooks/useNotifications'

export function Dashboard() {
  const { jobs, loading } = useJobs()
  const { pendingCount, triggerSync } = useSync()
  const isOnline = useNetworkStatus()
  const { requestPermission, sendNotification } = useNotifications()

  useEffect(() => {
    // Request notification permission on mount
    requestPermission()
  }, [])

  const stats = {
    total: jobs.length,
    pending: jobs.filter(j => j.status === 'pending').length,
    inProgress: jobs.filter(j => j.status === 'in-progress').length,
    completed: jobs.filter(j => j.status === 'completed').length
  }

  const handleTestNotification = () => {
    sendNotification('FieldTech PWA', {
      body: 'You have new jobs to review!',
      url: '/jobs',
      tag: 'test-notification'
    })
  }

  if (loading) {
    return <div className="container loading">Loading dashboard...</div>
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '24px' }}>Dashboard</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ background: '#e3f2fd', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1976d2' }}>{stats.total}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Jobs</div>
        </div>
        <div style={{ background: '#fff3e0', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff9800' }}>{stats.pending}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending</div>
        </div>
        <div style={{ background: '#e8f5e9', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#4caf50' }}>{stats.completed}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Completed</div>
        </div>
        <div style={{ background: '#f3e5f5', padding: '16px', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#9c27b0' }}>{stats.inProgress}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>In Progress</div>
        </div>
      </div>

      {pendingCount > 0 && (
        <div style={{ 
          background: '#fff3cd', 
          padding: '16px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <p>📤 {pendingCount} item(s) pending sync</p>
          {isOnline && (
            <button onClick={triggerSync} style={{ marginTop: '8px' }}>
              Sync Now
            </button>
          )}
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>Recent Activity</h3>
        {jobs.slice(0, 5).map(job => (
          <div key={job.id} style={{ 
            padding: '12px', 
            borderBottom: '1px solid #eee',
            fontSize: '14px'
          }}>
            <strong>{job.title}</strong> - {job.status}
          </div>
        ))}
      </div>

      {isOnline && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleTestNotification} style={{ background: '#666' }}>
            🔔 Test Notification
          </button>
        </div>
      )}
    </div>
  )
}