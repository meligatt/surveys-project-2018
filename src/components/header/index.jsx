import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <nav className="header">
      <a className="logo" href="/">
        Survey system
      </a>
      <ul className="nav-main">
        <li><Link to="/">Home</Link></li>
      </ul>

    </nav>
  )
}
export default Header;
