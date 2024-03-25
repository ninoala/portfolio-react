import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MobileNav () {

  return (
    <div className="mobile-nav">
      <button className="menu-toggle">
        Menu
      </button>
      
        <ul>
          <li>
            <Link to="/">&lt;HOME /&gt;</Link>
          </li>
          <li>
            <Link to="/about">&lt;ABOUT /&gt;</Link>
          </li>
          <li>
            <Link to="/works">&lt;WORKS /&gt;</Link>
          </li>
          <li>
            <Link to="/contact">&lt;CONTACT /&gt;</Link>
          </li>
      </ul>

    </div>
  )
}

export default MobileNav 