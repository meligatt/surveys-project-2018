import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const PercentagePie = ({value}) => {
  return (
    <div className="percentage-pie">
      <div className="percentage-pie__container">
        <h4>Participation rate as a percentage</h4>
        <div className="percentage-pie__percentage">{ (value * 100).toFixed(0) }%</div>
      </div>
    </div>);
};

PercentagePie.propTypes = {
  value: PropTypes.number,
};

export default PercentagePie;
