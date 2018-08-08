import './index.scss';
import React from 'react';

const Main = ({children}) => {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-content">
          { children }
        </div>
      </div>
    </main>
  );
}
export default Main;
