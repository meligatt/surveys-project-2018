import './index.scss';
import React, { Component } from 'react';
import { makeRequest } from '../../lib/requests/make-request';
import SurveyDetails from '../survey-details';
import PercentagePie from '../percentage-pie';
import AverageRatingPerQuestion from '../average-rating-per-question';
import SurveyThemeDetails from '../survey-theme-details';


class SurveyResults extends Component{
  constructor(){
    super();
    this.state = {results:{}}
  }

  componentDidMount(){
    // TODO:  get the url from this.state.results.url not params
    const { match } = this.props;
    makeRequest({
      endpoint: `/api/survey_results/${match.params.id}`,
      method: "GET",
    }).then((data) => {
      this.setState({results: data.survey_result_detail});
    });
  }

  renderSurveyThemes(themes){
    if(typeof themes === 'undefined' ||  themes.length === 0 ){
      return null;
    }
    return(
      <div className="survey-results__themes">
        { themes.map((theme, i) => <SurveyThemeDetails theme = { theme } key = {i} />) }
      </div>
    )
  }

  render(){
    const { name, participant_count, response_rate, submitted_response_count, themes } = this.state.results;
    return(
      <div className="survey-results">
        <div className="survey-results__container">
          <SurveyDetails
            name = { name }
            participantCount = { participant_count }
            responseRate = { response_rate }
            submittedResponseCount = { submitted_response_count }
          />
          <PercentagePie value = { response_rate }/>
          <AverageRatingPerQuestion themes = { themes }/>

          { this.renderSurveyThemes(themes) }

        </div>
      </div>
    )
  }
}

export default SurveyResults;
