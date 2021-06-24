import React from 'react'
import styled from 'styled-components'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 70%;
    height: 100%;
    background: rgba(15, 14, 15, 0.95);
    display: flex;
    justify-content: center;
    padding-top: 15vh;
    top: 0;
    right: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    @media screen and (min-width: 768px) {
        width: 30%;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #bdbdbd;
    cursor: pointer;
    font-family: "Roboto", sans-serif;

    &:hover {
        color: #27EE8E;
        transition: 0.2s ease-in-out;
    }

    &:nth-child(n+2) {
        margin-top: 3rem;
    }

    @media screen and (min-width: 480px) {
        font-size: 2rem;
    }
`