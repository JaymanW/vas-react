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
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Our Work</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header
