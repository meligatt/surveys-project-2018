import React from 'react';
import { Link } from 'react-router-dom';

const SurveyList = ({surveys}) => {
  return(
    <div>
      <h1>Survey List</h1>
      <div>
        { surveys.map((item, i) => {
          const url = item.url.split(".json")[0]; //url:  `/survey_results/1`
          return (
            <div key = {i} style={{outline:'1px solid pink', margin:'1rem'}}>
              <ul>
                <li>Name: {item.name}</li>
                <li>url: {item.url}</li>
                <li>participant_count: {item.participant_count}</li>
                <li>response_rate: {item.response_rate}</li>
                <li>submitted_response_count: {item.submitted_response_count}</li>
              </ul>
              <Link to={url}>View Results</Link>
            </div>
          )}
        )
      }
      </div>
    </div>
  )}
export default SurveyList;
