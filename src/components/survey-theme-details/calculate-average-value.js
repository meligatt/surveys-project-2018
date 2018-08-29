const getQuestionId = (arr, equal) => {
  if(!equal){
    throw new Error('question_id keys in the array passed are not equal');
  }
  return arr[0].question_id;
};

const allQuestionIdEqual = (arr) => {
  const areQuestionIdEqual = arr.every(
    (currentValue, index, array) => {
      return (currentValue.question_id === array[0].question_id);
    }
  );
  return areQuestionIdEqual;
};

const getResponseContentTotal = (arr) => {
  const validSurveyResponsesArray = arr.reduce(
    (accumulator, currentValue) => {
      const responseContent = parseInt(currentValue.response_content, 10);

      if (isNaN(responseContent)){
        return accumulator + 0;
      }

      return (accumulator + responseContent);
    }
    , 0);
  return validSurveyResponsesArray;
};

const getValidSurveyResponsesArray = (arr) => {
  return arr.filter((item) => item.response_content !== '');
};

export const getAverageRatingPerQuestion = (question) => {
  const validSurveyResponsesArray = getValidSurveyResponsesArray(question.survey_responses);
  const areQuestionIdEqual = allQuestionIdEqual(validSurveyResponsesArray);
  const questionId = getQuestionId(validSurveyResponsesArray, areQuestionIdEqual);
  const responseContentTotal = getResponseContentTotal(validSurveyResponsesArray);

  return {
    questionId: questionId,
    questionDescription: question.description,
    validResponsesCount: validSurveyResponsesArray.length,
    average: responseContentTotal / validSurveyResponsesArray.length
  };
};
