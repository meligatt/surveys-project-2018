import './index.scss';
import React from 'react';

const SurveyThemeDetails = ({theme}) => {
  return(
    <div className="survey-theme-details">
    <div className="survey-theme-details__container">
      <h4>Survey theme: <span className="survey-theme-details__name">{ theme.name }</span></h4>
      <h5>Questions:</h5>
      <ul className="survey-theme-details__question-list">
        { theme.questions.map((question, j) =>
          <li className="survey-theme-details__question-list-item" key = {j}>
            <div>{question.description}</div>
            <div>Question type: {question.question_type}</div>
            <div>Number of responses: {question.survey_responses.length}</div>
          </li>
        )}
      </ul>
    </div>
    </div>
  )}
  export default SurveyThemeDetails;
