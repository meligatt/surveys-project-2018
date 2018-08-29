import './index.scss';
import React, { Component } from 'react';
import { makeRequest } from '../../lib/requests/make-request';
import SurveyCard from '../survey-card';
import SurveyCardEmpty from '../survey-card-empty';

class SurveyList extends Component {
  constructor(){
    super();
    this.state = { surveys: null };
  }

  componentDidMount(){
    makeRequest({endpoint:'/api/surveys', method: 'GET'})
      .then((data) => {
        this.setState({surveys: data.survey_results});
      });
  }

  renderSurveys(surveys){
    if(surveys === null || surveys.length === 0){
      return (<SurveyCardEmpty />);
    }
    return surveys.map((item, i) => <SurveyCard item = { item } key = { i }/>);
  }

  render(){
    const { surveys } = this.state;
    return(
      <div className="survey-list">
        <h2 className="survey-list__title">Surveys:</h2>
        { this.renderSurveys(surveys) }
      </div>
    );}
}

export default SurveyList;
