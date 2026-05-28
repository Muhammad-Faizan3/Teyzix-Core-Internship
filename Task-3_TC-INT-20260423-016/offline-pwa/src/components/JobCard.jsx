import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StatusBadge } from './StatusBadge'

export function JobCard({ job }) {
  const navigate = useNavigate()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = date - now
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    
    if (days < 0) return `Overdue by ${Math.abs(days)} days`
    if (days === 0) return 'Due today'
    return `Due in ${days} days`
  }

  return (
    <div className="job-card" onClick={() => navigate(`/jobs/${job.id}`)}>
      <h3>{job.title}</h3>
      <p>{job.description.substring(0, 100)}...</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
        <StatusBadge status={job.status} />
        <span style={{ fontSize: '12px', color: '#757575' }}>
          {formatDate(job.dueDate)}
        </span>
      </div>
      {job.syncStatus === 'pending' && (
        <div style={{ fontSize: '11px', color: '#ff9800', marginTop: '8px' }}>
          ⏳ Pending sync
        </div>
      )}
    </div>
  )
}