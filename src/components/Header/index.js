import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

import './Header.css'

function Header(props) {
    return (
        <header className="Header">
            <a href="#" className="logo">Value Add <span className="logo-green">Services</span></a>
            {
                props.windowWidth < 768 ? 
                <Hamburger 
                    size="35"
                />
                :
                <nav>other text</nav>
            }
            
            
        </header>
    )
}

export default Header
