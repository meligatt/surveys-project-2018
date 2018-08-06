import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SurveyResults extends Component{
  constructor(){
    super();
    this.state = {results:{}}
  }

  componentDidMount(){
    // fetch for results according to survey_id requested passed via params.
    const { match } = this.props;
    axios.get(`http://localhost:3000/api/survey_results/${match.params.id}`)
    .then((response) => {
      this.setState({results: response.data.survey_result_detail});
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  render(){
    const { id } = this.props.match.params;
    const { name, participant_count, response_rate, submitted_response_count, themes, url } = this.state.results;

    return(
      <div>
        <h1>{ name } (id: {id})</h1>
        <h2>Results:</h2>
        <ul>
          <li>participant count: { participant_count }</li>
          <li>response rate { response_rate }</li>
          <li>submitted response_count { submitted_response_count }</li>
          <li>url { url }</li>
        </ul>
        <h3>Themes:</h3>
        <ul>
          { themes && themes.map((result, i) =>
            <li key = {i}>
              <h4>Theme: { result.name }</h4>
              <strong>Questions:</strong>
              <ul style={{border:'1px solid lightblue'}}>
                { result.questions.map((question, j) =>
                  <li key = {j}>
                    <p>question description: {question.description}</p>
                    <p>question type: {question.question_type}</p>
                    <p>number of responses: {question.survey_responses.length}</p>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default SurveyResults;
