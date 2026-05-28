import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { JobList } from './pages/JobList'
import { JobDetails } from './pages/JobDetails'
import { JobForm } from './pages/JobForm'
import { BottomNav } from './components/BottomNav'
import { OfflineIndicator } from './components/OfflineIndicator'

function App() {
  return (
    <div className="app">
      <OfflineIndicator />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/new" element={<JobForm />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default App