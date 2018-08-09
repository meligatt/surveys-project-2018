import './index.scss';
import React from 'react';
import { getAverageRatingPerQuestion } from './calculate-average-value';


const SurveyThemeDetails = ({theme}) => {
  const averagePerQuestionArray = theme.questions.map((question) => {
    return getAverageRatingPerQuestion(question);
  });

  return(
    <div className="survey-theme-details">
      <div className="survey-theme-details__container">
        <h4>Survey Theme: <span className="survey-theme-details__name">{ theme.name }</span></h4>
        <h5>Questions:</h5>
        <ul className="survey-theme-details__questions">
          { theme.questions.map((question, index, array) => {

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
                  <li>Response average (from valid responses): {averagePerQuestionItem.average}</li>
                </ul>

              </li>
            )}
          )
        }
      </ul>
    </div>
  </div>
)}
export default SurveyThemeDetails;
