import React from 'react'

export function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status) {
      case 'pending': return 'status-pending'
      case 'in-progress': return 'status-in-progress'
      case 'completed': return 'status-completed'
      default: return ''
    }
  }

  const getStatusLabel = () => {
    switch (status) {
      case 'pending': return 'Pending'
      case 'in-progress': return 'In Progress'
      case 'completed': return 'Completed'
      default: return status
    }
  }

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      {getStatusLabel()}
    </span>
  )
}