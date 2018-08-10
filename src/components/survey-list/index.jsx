import './index.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../lib/requests/make-request';
import SurveyDetails from '../survey-details';

class SurveyList extends Component {
  constructor(){
    super();
    this.state = {surveys: null};
  }

  componentDidMount(){
    makeRequest({endpoint:"/api/surveys", method: "GET"})
    .then((data) => {
      this.setState({surveys: data.survey_results});
    })
  }

  renderSurveys(surveys){
    if(surveys === null || surveys.length === 0){
      return (
        <div className="survey-list__card">
           <div className="survey-list__card-content">
             No surveys available
           </div>
        </div>
      );
    }
    return surveys.map((item, i) => {
      const url = item.url.split(".json")[0];
      return (
        <div className="survey-list__card" key = {i}>
          <header>
            <h3 className="survey-list__card-title">{item.name}</h3>
          </header>
          <div className="survey-list__card-content">
            <SurveyDetails
              participantCount = { item.participant_count }
              responseRate = { item.response_rate }
              submittedResponseCount = {item.submitted_response_count}
            />
          </div>
          <footer className="survey-list__card-actions">
            <Link className="survey-list__card-link" to = { url }>
              view details
            </Link>
          </footer>
        </div>
      )}
    )
  }

  render(){
    const { surveys } = this.state;
    return(
      <div className="survey-list">
        <h2 className="survey-list__title">Surveys:</h2>
        { this.renderSurveys(surveys) }
      </div>
    )}
  }
  export default SurveyList;
