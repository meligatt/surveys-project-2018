import React from 'react';
import SurveyResults from '../components/survey-results';

const SurveyResultsView = ({match}) => {
  return (
    <div className="SurveyResultsView">
      <SurveyResults match = {match}/>
    </div>
  );
}
export default SurveyResultsView;
