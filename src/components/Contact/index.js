import React, { useState, useEffect } from 'react'
import './Contact.scss'

function Contact({ windowWidth }) {
    const [formSize, setFormSize] = useState(1300);
    
    useEffect(() => {
        if (windowWidth < 400) {
            setFormSize(1300)
            console.log(formSize);
        } else if (windowWidth <= 768) {
            setFormSize(1000)
            console.log(formSize);
        }
    }, [windowWidth])
    
    return (
        <div id="Contact">
            <div className="Contact-wrapper">
                <h2>Contact Us</h2>
                <p>Interested in our services? Want to learn more? Questions? Comments? Fill out the form below and we'll get back to you as soon as we can! You can also give us a call, or send us an email to get in touch.</p>
                <div className="contact-icons">
                    <div className="contact-item">
                        <img src="./email.png" alt="email icon" />
                        <p>carrcrew2@aol.com</p>
                    </div>
                    <div className="contact-item">
                        <img src="./phone.png" alt="phone icon" />
                        <p>(507) 358-9520</p>
                    </div>
                </div>
                <iframe title="Value Add Services Contact Form" className="vas-form" src="https://docs.google.com/forms/d/e/1FAIpQLSf7w-pLHIvNsak4LdzfQfWT1d08USZ3AHBJicK5ZJml2vhL2A/viewform?embedded=true" width="640" height={formSize} frameBorder="0" id="contact-form">Loading…</iframe>
            </div>
        </div>
    )
}

export default Contact
