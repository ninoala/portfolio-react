import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
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
    </nav>
  );
}

export default Nav