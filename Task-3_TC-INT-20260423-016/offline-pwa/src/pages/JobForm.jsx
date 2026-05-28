import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useJobs } from '../hooks/useJobs'

export function JobForm() {
  const navigate = useNavigate()
  const { addJob } = useJobs()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0]
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    const jobData = {
      ...formData,
      dueDate: new Date(formData.dueDate).toISOString()
    }
    
    await addJob(jobData)
    navigate('/jobs')
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '24px' }}>Create New Job</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            placeholder="Enter job title"
          />
        </div>
        
        <div className="form-group">
          <label>Description *</label>
          <textarea
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            placeholder="Enter job description"
          />
        </div>
        
        <div className="form-group">
          <label>Due Date *</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Initial Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Creating...' : 'Create Job'}
          </button>
          <button type="button" onClick={() => navigate('/jobs')} style={{ background: '#666' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}