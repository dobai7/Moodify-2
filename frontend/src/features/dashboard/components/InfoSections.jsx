import React from 'react'

const SectionHead = ({ tag, title, text }) => (
  <div className="section-head">
    <span className="pill">{tag}</span>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)

const steps = [
  {
    icon: "ri-camera-line",
    title: "Detect",
    text: "Let the camera see you and tap Detect Mood. Your face expression is read right inside your browser.",
  },
  {
    icon: "ri-play-list-2-line",
    title: "Get Songs",
    text: "Moodify picks songs from its library that match the mood it just detected and lists them for you.",
  },
  {
    icon: "ri-headphone-line",
    title: "Enjoy",
    text: "Press play, watch how your mood changes through the week, and add your own songs too.",
  },
]

const features = [
  {
    icon: "ri-user-smile-line",
    title: "Real-time Mood Detection",
    text: "Your webcam reads your face expression and the result is ready in a moment.",
  },
  {
    icon: "ri-music-2-line",
    title: "Personalised Songs",
    text: "Every mood has its own list of songs, so what you hear always fits how you feel.",
  },
  {
    icon: "ri-crosshair-2-line",
    title: "Manual Mood Selection",
    text: "Not in the mood for the camera? Pick any of the 9 moods yourself and get songs instantly.",
  },
  {
    icon: "ri-upload-cloud-2-line",
    title: "Upload Your Songs",
    text: "Drop an mp3, choose a mood and add it to the Moodify library.",
  },
  {
    icon: "ri-bar-chart-2-line",
    title: "Mood Tracking",
    text: "See your detections, songs played, today's mood and your mood for the last 7 days.",
  },
  {
    icon: "ri-contrast-2-line",
    title: "Light & Dark Theme",
    text: "Switch between a warm light look and a deep dark look with a single tap.",
  },
]

const moods = [
  { name: "Happy", icon: "ri-emotion-happy-line", color: "#FFD93D", bg: "#FFF7D6", text: "Bright, upbeat songs to match your good vibes." },
  { name: "Sad", icon: "ri-emotion-sad-line", color: "#4D96FF", bg: "#DCEBFF", text: "Soft and slow songs that stay with you." },
  { name: "Romantic", icon: "ri-heart-line", color: "#FF4D6D", bg: "#FFE0E6", text: "Love songs for dreamy and warm moments." },
  { name: "Neutral", icon: "ri-emotion-normal-line", color: "#888888", bg: "#EEEEEE", text: "Easy listening for a calm, everyday mood." },
  { name: "Angry", icon: "ri-fire-line", color: "#FF6B35", bg: "#FFE2D6", text: "Loud, powerful songs to let the heat out." },
  { name: "Chill", icon: "ri-moon-clear-line", color: "#6C63FF", bg: "#E4E2FF", text: "Relaxed songs for slow evenings and late nights." },
  { name: "Motivate", icon: "ri-rocket-line", color: "#00C897", bg: "#D9FFF3", text: "High-energy songs to push you towards your goals." },
  { name: "Lonely", icon: "ri-user-heart-line", color: "#A084CA", bg: "#EEE6FF", text: "Songs that feel like company when you are alone." },
  { name: "Surprised", icon: "ri-sparkling-line", color: "#FF9F1C", bg: "#FFF0D9", text: "Fresh and unexpected songs to match the moment." },
]

export const HowItWorks = () => (
  <section id="how" className="section">
    <SectionHead
      tag="How it works"
      title="Three simple steps"
      text="From your face to your favourite song, it takes only a few seconds."
    />
    <div className="steps">
      {steps.map((s, i) => (
        <div key={s.title} className="step">
          <span className="num">0{i + 1}</span>
          <div className="icon-box"><i className={s.icon}></i></div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export const Features = () => (
  <section id="features" className="section">
    <SectionHead
      tag="Features"
      title="Everything you need, nothing extra"
      text="Simple tools that help you find the right music for the right mood."
    />
    <div className="feature-grid">
      {features.map((f) => (
        <div key={f.title} className="feature">
          <div className="icon-box"><i className={f.icon}></i></div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export const MoodsInfo = () => (
  <section id="moods" className="section">
    <SectionHead
      tag="Moods"
      title="9 moods, 9 kinds of music"
      text="Whatever you feel, there is a place for it in Moodify."
    />
    <div className="mood-grid">
      {moods.map((m) => (
        <div key={m.name} className="mood-card">
          <div className="m-icon" style={{ backgroundColor: m.bg, color: m.color }}>
            <i className={m.icon}></i>
          </div>
          <div>
            <h3>{m.name}</h3>
            <p>{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export const About = () => (
  <section id="about" className="section">
    <div className="about-card">
      <span className="pill">About Moodify</span>
      <h2>Music should <span className="grad">feel</span> right</h2>
      <p>
        Moodify is a music app that listens to your mood instead of your search. It detects how you
        feel from your face, shows songs for that mood, and keeps track of your mood history.
        Built with React, Node.js, MongoDB and face-api.js.
      </p>
      <div className="chips">
        <span><i className="ri-emotion-happy-line"></i>9 moods</span>
        <span><i className="ri-camera-line"></i>Live detection</span>
        <span><i className="ri-upload-cloud-2-line"></i>Your own songs</span>
      </div>
    </div>
  </section>
)