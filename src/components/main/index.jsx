import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Main = ({children}) => {
  return (
    <main id="main" className="main" role="main">
      <div className="main__container">
        <div className="main__content">
          { children }
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
