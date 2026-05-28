const API_BASE = '/api'

// Mock API calls - replace with your actual backend URL
// These simulate network requests and will fail when offline
export const api = {
  async getJobs() {
    const response = await fetch(`${API_BASE}/jobs`)
    if (!response.ok) throw new Error('Failed to fetch jobs')
    return response.json()
  },

  async createJob(job) {
    const response = await fetch(`${API_BASE}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    })
    if (!response.ok) throw new Error('Failed to create job')
    return response.json()
  },

  async updateJob(id, job) {
    const response = await fetch(`${API_BASE}/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    })
    if (!response.ok) throw new Error('Failed to update job')
    return response.json()
  },

  async deleteJob(id) {
    const response = await fetch(`${API_BASE}/jobs/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete job')
    return response.json()
  }
}