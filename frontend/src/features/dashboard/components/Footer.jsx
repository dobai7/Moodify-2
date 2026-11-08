import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

const Footer = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate("/login")
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="f-brand">
          <a href="#home" className="navleft">
            <i className="ri-music-2-line"></i>
            <div className="navhead">
              <h1>moodify</h1>
              <p>music for your mood</p>
            </div>
          </a>
          <p>Detect your mood, get songs that fit it, and enjoy music that understands you.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#how">How it Works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#moods">Moods</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            {user ? (
              <li><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Moodify. All rights reserved.</span>
        <span>Built with React, Node.js, MongoDB and face-api.js</span>
      </div>
    </footer>
  )
}

export default Footer