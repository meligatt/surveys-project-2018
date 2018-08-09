import { getAverageRatingPerQuestion } from '../calculate-average-value';

describe('getAverageRatingPerQuestion', () => {
  it('returns an object with key average rating per question', () => {
    const mockQuestion = {
      "description": "DESCRIPTION",
      "question_type": "QUESTION_TYPE",
      "survey_responses": [
        {
          "id": 3,
          "question_id": "QUESTION_ID",
          "respondent_id": 1,
          "response_content": "5"
        },
      ]
    };

    const result = getAverageRatingPerQuestion(mockQuestion);

    expect(result).toEqual({
      questionId: "QUESTION_ID",
      questionDescription: "DESCRIPTION",
      validResponsesCount: 1,
      average: 5
    });
  });
});
