import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import SurveyDetails from '../survey-details';
import { Link } from 'react-router-dom';

const SurveyCard = ({item}) => {
  const url = item.url.split('.json')[0];
  return(
    <div className="survey-card">
      <div className="survey-card__container">
        <header>
          <h3 className="survey-card__title">{item.name}</h3>
        </header>
        <div className="survey-card__content">
          <SurveyDetails
            participantCount = { item.participant_count }
            responseRate = { item.response_rate }
            submittedResponseCount = {item.submitted_response_count}
          />
        </div>
        <footer className="survey-card__actions">
          <Link className="survey-card__link" to = { url }>
            view details
          </Link>
        </footer>
      </div>
    </div>
  );};

SurveyCard.propTypes = {
  item: PropTypes.object
};

export default SurveyCard;
