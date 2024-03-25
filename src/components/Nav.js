import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <nav className="nav">
      <div className="hamburger-menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} /> }
      </div>

      <ul className={menuOpen ? '' : 'open'}>
        <li>
          <NavLink to="/">&lt;HOME /&gt;</NavLink>
        </li>
        <li>
          <NavLink to="/about">&lt;ABOUT /&gt;</NavLink>
        </li>
        <li>
          <NavLink to="/works">&lt;WORKS /&gt;</NavLink>
        </li>
        <li>
          <NavLink to="/contact">&lt;CONTACT /&gt;</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;