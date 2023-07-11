import React from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer } from './styles'

const NavBar = ({ options }) => {
  console.log('hola')
  return (
    <Nav>
      <LogoContainer>
        <NavLink>{'<--'}AnderDev{'!-->'}</NavLink>
      </LogoContainer>
      <ListNav>
        {
        options.map((option, index) => (
          <NavLink key={index} href={option.replaceAll(' ', '')}><NavLi>{option}</NavLi></NavLink>
        ))
        }
      </ListNav>
    </Nav>
  )
}

export default NavBar
