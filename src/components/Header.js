import React from 'react'
import Nav from './Nav'
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


function Header() {
  
  return (
    <header className="header">
        <NavLink to="/"><img src={Logo} alt="Website logo" /></NavLink>
        <Nav />
    </header>
  )
}

export default Header