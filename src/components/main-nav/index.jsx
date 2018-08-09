import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return(
    <nav className="main-nav">
      <div className="main-nav__container">
        <a className="main-nav__logo" href="/">
        Survey system
      </a>
      <ul className="main-nav__menu">
        <li className="main-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)}

export default MainNav;
