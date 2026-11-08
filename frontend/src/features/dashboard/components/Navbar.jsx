import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

const links = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "How it Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Moods", href: "#moods" },
  { label: "About", href: "#about" },
]

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(true)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  async function handleLogout() {
    await logout()
    setOpen(false)
    navigate("/login")
  }

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">

        <a href="#home" className="navleft">
          <i className="ri-music-2-line"></i>
          <div className="navhead">
            <h1>moodify</h1>
            <p>music for your mood</p>
          </div>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="navright">
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setIsDark(!isDark)}>
            <i className={isDark ? "ri-sun-fill" : "ri-moon-fill"}></i>
          </button>

          {user ? (
            <>
              <div className="user-chip">
                <span className="avatar">{user.username?.charAt(0)}</span>
                <span className="uname">{user.username}</span>
              </div>
              <button className="nav-btn" onClick={handleLogout}>
                <i className="ri-logout-box-r-line"></i><span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-btn">
                <i className="ri-login-box-line"></i><span>Login</span>
              </Link>
              <Link to="/register" className="nav-btn primary">
                <i className="ri-user-add-line"></i><span>Register</span>
              </Link>
            </>
          )}

          <button className="icon-btn burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar