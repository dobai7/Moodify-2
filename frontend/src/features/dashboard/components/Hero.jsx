import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

const bubbles = [
  { label: "Happy", icon: "ri-emotion-happy-line", color: "#FFD93D", bg: "#FFF7D6" },
  { label: "Sad", icon: "ri-emotion-sad-line", color: "#4D96FF", bg: "#DCEBFF" },
  { label: "Romantic", icon: "ri-heart-line", color: "#FF4D6D", bg: "#FFE0E6" },
  { label: "Neutral", icon: "ri-emotion-normal-line", color: "#888888", bg: "#EEEEEE" },
  { label: "Angry", icon: "ri-fire-line", color: "#FF6B35", bg: "#FFE2D6" },
  { label: "Chill", icon: "ri-moon-clear-line", color: "#6C63FF", bg: "#E4E2FF" },
  { label: "Motivate", icon: "ri-rocket-line", color: "#00C897", bg: "#D9FFF3" },
  { label: "Lonely", icon: "ri-user-heart-line", color: "#A084CA", bg: "#EEE6FF" },
  { label: "Surprised", icon: "ri-sparkling-line", color: "#FF9F1C", bg: "#FFF0D9" },
]

const Hero = () => {
  const { user } = useAuth()

  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <span className="pill">
          <i className="ri-sparkling-line"></i>
          {user ? `Welcome back, ${user.username}` : "Music that matches your mood"}
        </span>

        <h1>Let your mood choose <span className="grad">the music.</span></h1>

        <p>
          Look at your camera, let Moodify read your expression, and get songs made for
          your mood in seconds. No endless searching, just press play.
        </p>

        <div className="hero-cta">
          {user ? (
            <>
              <a href="#dashboard" className="btn primary">
                Detect My Mood <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#how" className="btn ghost">See how it works</a>
            </>
          ) : (
            <>
              <Link to="/register" className="btn primary">
                Get Started <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/login" className="btn ghost">Login</Link>
            </>
          )}
        </div>

        <div className="hero-stats">
          <div><strong>9</strong><span>Moods</span></div>
          <div><strong>Live</strong><span>Face detection</span></div>
          <div><strong>Your</strong><span>Own songs</span></div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <h3>How are you feeling?</h3>
        <p>Moodify understands 9 different moods.</p>

        <div className="bubbles">
          {bubbles.map((b) => (
            <div key={b.label} className="bubble" style={{ backgroundColor: b.bg, color: b.color }}>
              <i className={b.icon}></i>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero