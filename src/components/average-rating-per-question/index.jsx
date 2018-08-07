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
       <div>
         <div>
           <p>the average rating (from 1 to 5) for each question</p>
           {
             result.map((item) => {
               return item.map((value, i) => <p key={i}>{ value.question }: {value.average}</p>)
             })
           }
         </div>
       </div>
    )
  }

export default AverageRatingPerQuestion;
