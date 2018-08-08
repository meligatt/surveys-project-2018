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
      return "No list available";
    }
    return surveys.map((item, i) => {
      const url = item.url.split(".json")[0]; //url:  `/survey_results/1`
      return (
        <div key = {i} className="survey-list-item">
          <SurveyDetails
            name = {item.name}
            participantCount = { item.participant_count }
            responseRate = { item.response_rate }
            submittedResponseCount = {item.submitted_response_count}
          />
          <Link to = { url }>
            View survey details
          </Link>
          <hr/>
        </div>
      )}
    )
  }

  render(){
    const { surveys } = this.state;
    return(
        <div>
          { this.renderSurveys(surveys) }
        </div>
    )}
  }
  export default SurveyList;
