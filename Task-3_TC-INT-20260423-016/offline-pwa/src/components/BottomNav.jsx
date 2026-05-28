import React from 'react'
import { NavLink } from 'react-router-dom'

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">📊</span>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/jobs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">📋</span>
        <span>Jobs</span>
      </NavLink>
      <NavLink to="/jobs/new" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">➕</span>
        <span>New Job</span>
      </NavLink>
    </nav>
  )
}