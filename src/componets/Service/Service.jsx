import React from 'react'
import '../About/About.css'
import './Service.css'

function Service() {
  return (
    <div className='service'>
        <div className="content-nav">
            <span>Our Services</span>

        </div>

        <div className="row " >
                <div className="col-1 side-nav">
                    <h3>What We Do.</h3>
                </div>
                <div className="col">
                <p className='text-details'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>
           
        </div>
        <div className="text-layer">
                <div>
                    <span>Services</span>
                    <span className='stroke-text'>Services</span>
                </div>

            </div>

        <div className="service-box">
            <div>
                <h1>logo</h1>
                <h2>Brand Identity</h2>
                <p>We bring the right people together to challenge</p>
                <ul className='service-item'>
                    <li> Brand Strategy</li>
                    <li>Brand Naming</li>
                    <li>Logo Design</li>
                    <li>Corporate Identity</li>
                </ul>
            </div>
            <div>
                <h1>logo</h1>
                <h2>Brand Identity</h2>
                <p>We bring the right people together to challenge</p>
                <ul className='service-item'>
                    <li> Brand Strategy</li>
                    <li>Brand Naming</li>
                    <li>Logo Design</li>
                    <li>Corporate Identity</li>
                </ul>
            </div>
            <div>
                <h1>logo</h1>
                <h2>Brand Identity</h2>
                <p>We bring the right people together to challenge</p>
                <ul className='service-item'>
                    <li> Brand Strategy</li>
                    <li>Brand Naming</li>
                    <li>Logo Design</li>
                    <li>Corporate Identity</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Service