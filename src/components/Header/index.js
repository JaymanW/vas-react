import React from 'react'
import Hamburger from 'hamburger-react'

import './Header.scss'
import './HeaderWhite.scss'

function Header(props) {
    console.log(`newheaderstyle: ${props.newHeaderStyle}`)
    console.log(`burger: ${props.newBurgerStyle}`)
    
    return (
        // <header style={{background: props.newHeaderStyle ? 'rgba(255, 255, 255, 1)' : 'none', boxShadow: props.newBurgerStyle ? 'none' : props.newHeaderStyle ? '0 8px 6px -6px #999' : 'none' }} >
        <header >
            <div className='Header'>
                <Hamburger 
                    size="30"
                    color={props.newBurgerStyle ? '#fff' : props.newHeaderStyle ? '#000' : '#fff'}
                    onToggle={() => props.onBurger()}
                    toggled={props.isOpen}
                />
            </div>
        </header>
    )
}

export default Header
// {props.newHeaderStyle ? '#000' : props.newBurgerStyle ? '#000' : '#fff'}