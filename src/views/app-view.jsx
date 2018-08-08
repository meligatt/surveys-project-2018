import './app-view.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import SurveysView from './surveys-view';
import SurveyResultsView from './survey-results-view';
import Main from '../components/main';
import Header from '../components/header';
import Footer from '../components/footer';

const AppView = () => {
  return(
    <div className="app-view">
      <div className="app-view-container">
        <Header />
        <Main>
          <Route exact path="/" component = { SurveysView } />
          <Route path="/survey_results/:id" component = { SurveyResultsView }/>
        </Main>
      </div>
      <Footer/>
    </div>
  );
}
export default AppView;
