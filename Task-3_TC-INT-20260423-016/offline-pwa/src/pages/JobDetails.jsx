import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useJobs } from '../hooks/useJobs'
import { StatusBadge } from '../components/StatusBadge'

export function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getJob, updateJob } = useJobs()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    loadJob()
  }, [id])

  const loadJob = async () => {
    const jobData = await getJob(id)
    setJob(jobData)
    setFormData(jobData || {})
    setLoading(false)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateJob(id, formData)
    setIsEditing(false)
    loadJob()
  }

  const handleStatusChange = async (newStatus) => {
    await updateJob(id, { status: newStatus })
    loadJob()
  }

  if (loading) {
    return <div className="container loading">Loading job details...</div>
  }

  if (!job) {
    return <div className="container">Job not found</div>
  }

  if (isEditing) {
    return (
      <div className="container">
        <h1>Edit Job</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              value={formData.dueDate ? formData.dueDate.split('T')[0] : ''}
              onChange={(e) => setFormData({ ...formData, dueDate: new Date(e.target.value).toISOString() })}
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              value={formData.status || 'pending'}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} style={{ background: '#666' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/jobs')} style={{ background: '#666', padding: '8px 16px' }}>
          ← Back
        </button>
      </div>
      
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '24px' }}>{job.title}</h1>
          <StatusBadge status={job.status} />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Description</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>{job.description}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Due Date</h3>
          <p>{new Date(job.dueDate).toLocaleDateString()}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Created</h3>
          <p>{new Date(job.createdAt).toLocaleString()}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Last Updated</h3>
          <p>{new Date(job.updatedAt).toLocaleString()}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => setIsEditing(true)}>
            Edit Job
          </button>
          {job.status !== 'completed' && (
            <button onClick={() => handleStatusChange('completed')} style={{ background: '#4caf50' }}>
              Mark Complete
            </button>
          )}
          {job.status !== 'in-progress' && job.status !== 'completed' && (
            <button onClick={() => handleStatusChange('in-progress')} style={{ background: '#ff9800' }}>
              Start Progress
            </button>
          )}
        </div>
        
        {job.syncStatus === 'pending' && (
          <div style={{ marginTop: '16px', padding: '12px', background: '#fff3cd', borderRadius: '8px' }}>
            ⏳ This job has pending changes that will sync when you're online
          </div>
        )}
      </div>
    </div>
  )
}