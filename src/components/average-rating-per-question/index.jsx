import './index.scss';
import React from 'react';

const getAverageRatingPerQuestion = (question) => {
  const answeredQuestionsArray = question.survey_responses.filter((item) => item.response_content !== "");

  const responseContentTotal = answeredQuestionsArray.reduce((accumulator, currentValue) => {
    const responseContent = parseInt(currentValue.response_content, 10);
    if (!isNaN(responseContent)){
      return (accumulator + responseContent);
    }
    return accumulator + 0;
  }, 0);

  return {
    question: question.description,
    average: responseContentTotal / answeredQuestionsArray.length
  };
}

const AverageRatingPerQuestion = ({
  themes
}) => {
  if (typeof themes === 'undefined' || themes.length === 0){
    return null;
  }

  const result = themes.map((theme) => {
    const questionsArray = theme.questions;
    const averageRatingPerQuestion = questionsArray.map((question) => {
      return getAverageRatingPerQuestion(question)
    });
    return averageRatingPerQuestion;
  });

  return(
    <div className="question-average-rating">
    <div className="question-average-rating__container">
      <h4>The average rating for each question <small>(from 1 to 5)</small></h4>
      {
        result.map((item) => {
          return item.map((value, i) =>
          <div className="question-average-rating__item" key={i}>
            <div className="question-average-rating__question">{ value.question }</div>
            <div className="question-average-rating__value">{value.average}</div>
          </div>)
        })
      }
    </div>
    </div>
  )
}

export default AverageRatingPerQuestion;
