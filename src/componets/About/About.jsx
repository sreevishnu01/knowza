import React from 'react'
import './About.css'

function About() {
  return (
    <div className='aboutus'>
        <div className="content-nav">
            <span>about us</span>

        </div>
        
        <div className="row center">
            <div className="col-1 side-nav">
                <h3>welcome  to NAme</h3>
            </div>
            <div className="col">
                <p className='text-details'>
                Welcome! We are  Knowza, a young, fast-growing and proudly independent marketing agency.
                We pride ourselves on working closely with our partners to create fiercely innovative and well-researched strategic marketing campaigns.
                We are committed to helping startup companies and individuals compete in today’s cutthroat market by devising creative strategies with cost effective solutions.
                Our diverse team have a breadth of expertise that make our strategy adaptable and ever evolving to suit your needs.
                </p>
            </div>
        </div>

        <div className="text-layer">
            <div>
            <span className='stroke-text'>about us</span>
            <span>about us</span>
            </div>
            <div>
            <span className='stroke-text'>about us</span>
            <span>about us</span>
            </div>

        </div>


        

    </div>
  )
}

export default About