import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        className="theme-toggle-input"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="theme-toggle-label">
        <span className="theme-toggle-inner"></span>
        <span className="theme-toggle-switch"></span>
      </label>
    </div>
  )
}

export default ThemeToggle 