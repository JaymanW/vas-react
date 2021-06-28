import React from 'react'

import { SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

function Sidebar(props) {
    return (
        <SidebarContainer isOpen={props.isOpen}>
            {/* <Icon >
                <img src={closeIcon} onClick={props.onBurger} style={{width: '35px'}}></img>
            </Icon> */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href="#About" onClick={props.onBurger} >About Us</SidebarLink>
                    <SidebarLink href="#Work" onClick={props.onBurger} >Our Work</SidebarLink>
                    <SidebarLink href="#Contact" onClick={props.onBurger} >Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
