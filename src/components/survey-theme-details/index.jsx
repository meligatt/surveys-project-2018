import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { getAverageRatingPerQuestion } from './calculate-average-value';
import { roundToNearestInteger } from '../../lib/helpers';

const renderStars = (value) => {
  if(isNaN(value) || value === 0 ){
    return (<span>No rating available</span>);
  }
  let star = '★';
  for(let i=1; i < value; i++ ){
    star = star + '★';
  }
  return <span className="survey-theme-details__star" role="img" aria-label="rating"> {star} </span>;
};

const SurveyThemeDetails = ({theme}) => {
  const averagePerQuestionArray = theme.questions.map((question) => {
    return getAverageRatingPerQuestion(question);
  });

  return(
    <div className="survey-theme-details">
      <div className="survey-theme-details__container">
        <h4>Survey Theme: <span className="survey-theme-details__name">{ theme.name }</span></h4>

        <div className="survey-theme-details__scale">
          Survey scale:
          <ul>
            <li>1 star: strongly disagree</li>
            <li>5 stars: strongly agree</li>
          </ul>
        </div>

        <h5>Questions:</h5>
        <ul className="survey-theme-details__questions">
          { theme.questions.map((question, index) => {
            const averagePerQuestionItem = averagePerQuestionArray.find((item)=>{
              return item.questionDescription === question.description;
            });

            return (
              <li key = {index}>
                <div className="survey-theme-details__question-description">
                  {question.description}
                </div>
                <ul className="survey-theme-details__stats">
                  <li>Question type: {question.question_type}</li>
                  <li>Number of responses per question: {question.survey_responses.length}</li>
                  <li>Number of Valid responses per question: {averagePerQuestionItem.validResponsesCount}</li>
                  <li>Response average (from valid responses):
                    {renderStars(roundToNearestInteger(averagePerQuestionItem.average))}
                    <small> ({ roundToNearestInteger(averagePerQuestionItem.average) })</small>
                  </li>
                </ul>
              </li>
            );}
          ) }
        </ul>
      </div>
    </div>
  );
};

SurveyThemeDetails.propTypes = {
  theme: PropTypes.object,
};

export default SurveyThemeDetails;
