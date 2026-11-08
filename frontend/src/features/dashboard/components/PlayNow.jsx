import { useRef, useState } from "react"

function formatTime(sec) {
  if (!sec || isNaN(sec)) return "0:00"
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60).toString().padStart(2, "0")
  return `${m}:${s}`
}

const Player = ({ currentSong }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState("0:00")
  const [duration, setDuration] = useState("0:00")

  function togglePlay() {
    const audio = audioRef.current
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    setCurrentTime(formatTime(audio.currentTime))
    setDuration(formatTime(audio.duration))
  }

  function handleSeek(e) {
    const audio = audioRef.current
    if (!audio.duration) return
    audio.currentTime = (e.target.value / 100) * audio.duration
    setProgress(e.target.value)
  }

  function skip(seconds) {
    const audio = audioRef.current
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds))
  }

  return (
    <div className="play-song">

      <div className="player-left">
        <img src={currentSong.thumbnail} alt={currentSong.title} />
        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <i className="ri-replay-10-line" onClick={() => skip(-10)}></i>
          <i className={isPlaying ? "ri-pause-fill" : "ri-play-fill"} onClick={togglePlay}></i>
          <i className="ri-forward-10-line" onClick={() => skip(10)}></i>
        </div>
        <div className="player-progress">
          <span>{currentTime}</span>
          <input type="range" min="0" max="100" value={progress} onChange={handleSeek} />
          <span>{duration}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

    </div>
  )
}

const PlayNow = ({ currentSong }) => {
  if (!currentSong) {
    return (
      <div className="play-song">
        <p className="no-song">Select a song from the list</p>
      </div>
    )
  }

  // key = new song gets a fresh player, so icon and progress always reset
  return <Player key={currentSong._id} currentSong={currentSong} />
}

export default PlayNow