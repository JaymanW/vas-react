import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

import './Header.scss'

function Header(props) {
    return (
        <header className="Header">
            <h1>
                <a href="#" className="logo">Value Add <span className="logo-green">Services</span></a>
            </h1>
            {
                props.windowWidth < 768 ? 
                <Hamburger 
                    size="35"
                    color="#fff"
                />
                :
                <nav>other text</nav>
            }
        </header>
    )
}

export default Header
