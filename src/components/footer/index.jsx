import './index.scss';
import React from 'react';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__author">
          <span>Code challenge for Culture Amp - 2018 by Melissa Gattoni</span>
          <img width="auto" height="40" src={ require('./ahsoka.svg') } alt="logo"/>
        </div>
        <ul  className="footer__link-list">
          <li className="footer__list-item">
            <a href="https://www.linkedin.com/in/melissa-gattoni-54975b49/" rel='noopener noreferrer' target="_blank">LinkedIn</a>
          </li>
          <li className="footer__list-item" rel='noopener noreferrer' target="_blank">
            <a href="https://github.com/meligatt">Github</a>
          </li>
          <li className="footer__list-item" rel='noopener noreferrer' target="_blank">
            <a href="https://twitter.com/meligatt">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;
