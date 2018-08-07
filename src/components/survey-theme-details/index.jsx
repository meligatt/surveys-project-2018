import React from 'react';
const SurveyThemeDetails = ({theme}) => {
  return(
    <div>
      <h4>Theme: { theme.name }</h4>
      <strong>Questions:</strong>
      <ul>
        { theme.questions.map((question, j) =>
          <li key = {j}>
            <p>question description: {question.description}</p>
            <p>question type: {question.question_type}</p>
            <p>number of responses: {question.survey_responses.length}</p>
          </li>
        )}
      </ul>
    </div>
  )}
  export default SurveyThemeDetails;
