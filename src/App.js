import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SurveyList from './components/survey-list';

class App extends Component {
  constructor(){
    super();
    this.state = {surveys:[]};
  }
  componentDidMount(){
    axios.get("http://localhost:3000/api/surveys")
    .then((response) => {
      console.log('response',response);
      this.setState({surveys: response.data.survey_results})
    })
    .catch((error) => {
      console.log(error.message);
    })
  }
  render() {
    const { surveys } = this.state;
    return (
      <Router>
        <div className="App" style={{border:'1px solid gray', padding: '1rem'}}>
        <Route exact={true} path="/" render = {()=> <SurveyList surveys = { surveys } /> } />
        <Route path="/survey_results/:id" render ={({ match }) => <div><h1>Survey Results</h1> <p>survey:{ match.params.id}</p></div>}/>
        </div>
      </Router>
    );
  }
}

export default App;
