import React from 'react'
import Topbar from '../Tobbar/Topbar'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>

    <div className="container">


        <Topbar />

            <div className="row" >
                <div className="col-1 side-nav">
                    <h3>CREATIVE AGENCY</h3>
                </div>
                <div className="col">
                    <h1 className='hero-text'>
                        <span>Let's make</span>
                        <span>something</span>
                        great together.
                    </h1>
                    <p className='hero-text-detail'>We're an advanced digital solutions agency. We're built for challengers who need to get to 'What's Next,' first.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero