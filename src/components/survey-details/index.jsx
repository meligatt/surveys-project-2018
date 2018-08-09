import './index.scss';
import React from 'react';
import { setValueAsPercentage } from '../../lib/helpers';

const SurveyDetails = ({
  name,
  participantCount,
  responseRate,
  submittedResponseCount,
}) => {
  return(
    <div className="survey-details">
      { name && <h3 className="survey-details__title">{ name }</h3> }
      <ul className="survey-details__list">
        <li className="survey-details__item">Participant count: { participantCount }</li>
        <li className="survey-details__item">Response rate: { responseRate && setValueAsPercentage(responseRate) }%</li>
        <li className="survey-details__item">Submitted response count: { submittedResponseCount }</li>
      </ul>
    </div>
  );
}
export default SurveyDetails;
