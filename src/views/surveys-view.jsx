import React from 'react';
import SurveyList from '../components/survey-list';

const SurveysView = () => {
  return (
    <div className="surveys-view">
      <div className="surveys-view__container">
        <header>
          <h1>Welcome to the Survey System</h1>
          <p>You will find useful information about the latest surveys of 2018.</p>
        </header>
        <SurveyList />
      </div>
    </div>
  );
}
export default SurveysView;
