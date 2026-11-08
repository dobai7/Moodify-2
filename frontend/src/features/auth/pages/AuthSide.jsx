import React from 'react'
import { Link } from 'react-router-dom'

const points = [
  { icon: "ri-camera-line", text: "Detect your mood with your camera" },
  { icon: "ri-music-2-line", text: "Get songs that match how you feel" },
  { icon: "ri-bar-chart-2-line", text: "Track your mood every day" },
]

const AuthSide = () => (
  <aside className="auth-side">
    <Link to="/" className="navleft">
      <i className="ri-music-2-line"></i>
      <div className="navhead">
        <h1>moodify</h1>
        <p>music for your mood</p>
      </div>
    </Link>

    <div className="side-body">
      <h2>Let your mood choose <span className="grad">the music.</span></h2>
      <p>Join Moodify and get songs made for exactly how you feel right now.</p>

      <ul>
        {points.map((p) => (
          <li key={p.text}>
            <span className="icon-box"><i className={p.icon}></i></span>
            {p.text}
          </li>
        ))}
      </ul>
    </div>
  </aside>
)

export default AuthSide