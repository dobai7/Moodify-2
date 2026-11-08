import React from 'react'
import "../style/loading.scss"

const Loading = () => {
  return (
    <div className='loading-div'>
      <span className="spinner"></span>
      <h1 className='loading-text'>Loading...</h1>
    </div>
  )
}

export default Loading