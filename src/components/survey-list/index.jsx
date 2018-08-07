import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../lib/make-request';
import SurveyDetails from '../survey-details';

class SurveyList extends Component {
  constructor(){
    super();
    this.state = {surveys: null};
  }

  componentDidMount(){
    makeRequest({endpoint:"http://localhost:3000/api/surveys", method: "GET"})
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
        <div key = {i}>
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
        <h1>Survey List</h1>
        <div>
          { this.renderSurveys(surveys) }
        </div>
      </div>
    )}
  }
  export default SurveyList;
