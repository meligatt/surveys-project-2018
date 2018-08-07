import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div style = {{backgroundColor:'#EEE'}}>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}
export default Header;
