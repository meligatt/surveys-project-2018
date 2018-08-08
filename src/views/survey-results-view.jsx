import React from 'react';
import SurveyResults from '../components/survey-results';

const SurveyResultsView = ({match}) => {
  return (
    <div className="survey-results-view">
      <div className="survey-results-view__container">
        <SurveyResults match = {match}/>
      </div>
    </div>
  );
}
export default SurveyResultsView;
