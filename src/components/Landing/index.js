import React from 'react'
import './Landing.scss'

function Landing() {
    return (
        <div className="Landing">
            <div className="logo-cnt">
                    <h1>
                        <a href="#" className="logo">Value Add <span className="logo-green">Services</span></a>
                    </h1>
            </div>
            <div className="landing-cnt"> 
                <h2>Transform your <br className="line-break" /> kitchen</h2>
                <div className="landing-btn-cnt">
                        <a href="#" className='btn-primary'>Our Work</a>
                        <a href="#" className='btn-secondary'>Contact Us</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing
