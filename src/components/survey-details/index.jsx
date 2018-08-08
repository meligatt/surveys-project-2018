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
      <div className="survey-details__title">{ name }</div>
      <ul>
        <li>Name: { name }</li>
        <li>Participant count: { participantCount }</li>
        <li>Response rate: { setValueAsPercentage(responseRate) }</li>
        <li>Submitted response count: { submittedResponseCount }</li>
      </ul>
    </div>
  );
}
export default SurveyDetails;
