import React from 'react'
import Nav from './Nav'
import Logo from '../assets/logo.png';

function Header() {
  return (
    <div className="header">
        <img src={Logo} />
        <Nav />
    </div>
  )
}

export default Header