import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import './About.scss'

function About() {
    return (
        <div id="About">
            <div className='About-wrapper'>
                <div className="About-cnt">
                    <img src="./vas-employees.png" alt="Value Add Services employees" />
                    <div className="About-text">
                        <h2>About Us</h2>
                        <p>We are a light construction and remodeling company serving the southern Minnesota area for over 7 years. We partner with <a href="#">Kitchen Refresh</a> to provide beautiful, affordable kitchen remodeling options. As a small business, we are dedicated to providing personal and professional improvements to your home. Interested in learning more? <a href="#">Get in touch</a> with us.</p>
                    </div>
                </div>
                <div className="About-stats">
                    <div className="About-stats-cnt">
                        <img src="./hammer150.png" />
                        <div className="About-stats-cnt-text">
                            <p className="stats-number">
                                <CountUp start={0} end={100} duration={5} redraw={true} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                                </CountUp>+
                            </p>
                            <p className="stats-text">Kitchens Transformed</p>
                        </div>
                    </div>
                    <div className="About-stats-cnt">
                        <img src="./customers150.png" />
                        <div className="About-stats-cnt-text">
                            <p className="stats-number">
                                <CountUp start={0} end={100} duration={5} redraw={true} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                                </CountUp>+
                            </p>
                            <p className="stats-text">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
