import React from 'react'
import './Mouse.css'

function Mouse() {
  return (
    <div className='mouse'>
        <canvas id="c"></canvas>
	<div class="message">Move your mouse around the screen.</div>
    </div>
  )
}

export default Mouse