import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__author">
          <span>Code challenge for Culture Amp - 2018 by Melissa Gattoni</span>
          <img width="auto" height="40" src={ require('./ahsoka.svg') } alt="Author logo"/>
        </div>
        <ul  className="footer__link-list">
          <li className="footer__list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer__list-item">
            <a href="https://twitter.com/meligatt" rel='noopener noreferrer' target="_blank">Author</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
