import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { HowItWorks, Features, MoodsInfo, About } from '../components/InfoSections'
import Footer from '../components/Footer'

import MoodDetector from '../../moodDetection/components/MoodDetector'
import MoodSection from '../components/MoodSection'
import SongList from "../components/SongList.jsx"
import SelectMood from '../components/SelectMood'
import PlayNow from '../components/PlayNow'
import UploadSong from '../components/UploadSong.jsx'

import { useMoodDetection } from '../../moodDetection/hooks/useMoodDetection'
import { useSongs } from '../../songs/hooks/useSongs'
import { useAuth } from '../../auth/hooks/useAuth'

const Dashboard = () => {

  const { videoRef, mood, handleDetectMood } = useMoodDetection()
  const { song, currentSong, setCurrentSong } = useSongs()
  const { user } = useAuth()

  function handleSelect(data) {
    setCurrentSong(data)
  }

  return (
    <div className='site'>

      <Navbar />

      <Hero />

      <section id="dashboard" className="section">

        <div className="section-head">
          <span className="pill"><i className="ri-dashboard-line"></i> Your dashboard</span>
          <h2>Detect, play and track your mood</h2>
          <p>Scan your mood, pick songs from the list and watch your mood stats grow.</p>
        </div>

        {!user && (
          <div className="login-note">
            <i className="ri-lock-line"></i>
            <p>Login to detect your mood, track your stats and upload songs. You can still play songs from the list below.</p>
            <Link to="/login" className="btn primary small">Login</Link>
          </div>
        )}

        <div className="dash-grid">

          <MoodDetector
            videoRef={videoRef}
            mood={mood}
            handleDetectMood={handleDetectMood}
          />

          <MoodSection />

          <div className='song-list'>
            <h3>songs for you</h3>
            <div className="lists">
              {(song || []).map((data, idx) => (
                <SongList key={data._id || idx} data={data} idx={idx} onSelect={handleSelect} />
              ))}
            </div>
          </div>

          <SelectMood />

          <PlayNow currentSong={currentSong} />

          <UploadSong />

        </div>
      </section>

      <HowItWorks />
      <Features />
      <MoodsInfo />
      <About />
      <Footer />

    </div>
  )
}

export default Dashboard