import React, { useState } from 'react'
import { useJobs } from '../hooks/useJobs'
import { JobCard } from '../components/JobCard'

export function JobList() {
  const { jobs, loading } = useJobs()
  const [filter, setFilter] = useState('all')

  const filteredJobs = jobs.filter(job => {
    if (filter === 'all') return true
    return job.status === filter
  })

  if (loading) {
    return <div className="container loading">Loading jobs...</div>
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ marginBottom: '16px' }}>Jobs</h1>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
          <button 
            onClick={() => setFilter('all')}
            style={{ 
              background: filter === 'all' ? '#1976d2' : '#e0e0e0',
              padding: '8px 16px',
              fontSize: '14px'
            }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('pending')}
            style={{ 
              background: filter === 'pending' ? '#1976d2' : '#e0e0e0',
              padding: '8px 16px',
              fontSize: '14px'
            }}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('in-progress')}
            style={{ 
              background: filter === 'in-progress' ? '#1976d2' : '#e0e0e0',
              padding: '8px 16px',
              fontSize: '14px'
            }}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter('completed')}
            style={{ 
              background: filter === 'completed' ? '#1976d2' : '#e0e0e0',
              padding: '8px 16px',
              fontSize: '14px'
            }}
          >
            Completed
          </button>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center" style={{ padding: '40px', color: '#757575' }}>
          No jobs found
        </div>
      ) : (
        filteredJobs.map(job => <JobCard key={job.id} job={job} />)
      )}
    </div>
  )
}