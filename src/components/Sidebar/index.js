import React from 'react'
import closeIcon from './close.png'

import { SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

function Sidebar(props) {
    return (
        <SidebarContainer isOpen={props.isOpen}>
            {/* <Icon >
                <img src={closeIcon} onClick={props.onBurger} style={{width: '35px'}}></img>
            </Icon> */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href="#" onClick={props.onBurger} >About Us</SidebarLink>
                    <SidebarLink href="#" onClick={props.onBurger} >Our Work</SidebarLink>
                    <SidebarLink href="#" onClick={props.onBurger} >Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
