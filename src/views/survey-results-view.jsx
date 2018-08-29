import React from 'react';
import PropTypes from 'prop-types';
import SurveyResults from '../components/survey-results';

const SurveyResultsView = ({match}) => {
  return (
    <div className="survey-results-view">
      <div className="survey-results-view__container">
        <SurveyResults match = {match}/>
      </div>
    </div>
  );
};

SurveyResultsView.propTypes = {
  match: PropTypes.object,
};

export default SurveyResultsView;
