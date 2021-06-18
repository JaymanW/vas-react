import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

import './Header.scss'
import './HeaderWhite.scss'

function Header(props) {
    return (
        <header style={{background: props.newHeaderStyle ? 'rgba(255, 255, 255, 1)' : 'none', boxShadow: props.newHeaderStyle ? '0 8px 6px -6px #999' : 'none' }} >
            <div className={props.newHeaderStyle ? 'HeaderWhite' : 'Header'}>
                <h1>
                        <a href="#" className="logo">Value Add <span className="logo-green">Services</span></a>
                    </h1>
                    {
                        props.windowWidth < 768 ? 
                        <Hamburger 
                            size="25"
                            color={props.newHeaderStyle ? '#000' : '#fff'}
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
            </div>
                
        </header>
    )
}

export default Header
