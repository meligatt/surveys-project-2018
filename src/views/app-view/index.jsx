import './index.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import SurveysView from '../surveys-view';
import SurveyResultsView from '../survey-results-view';
import AboutView from '../about-view';
import Main from '../../components/main';
import MainNav from '../../components/main-nav';
import Footer from '../../components/footer';

const AppView = () => {
  return(
    <div className="app-view">
      <div className="app-view__container">
        <a className="skip-link" href="#main">Skip to main content</a>
        <MainNav />
        <Main>
          <Route exact path="/" component = { SurveysView } />
          <Route path="/survey_results/:id" component = { SurveyResultsView }/>
          <Route exact path="/about" component = { AboutView } />
        </Main>
      </div>
      <Footer/>
    </div>
  );
};
export default AppView;
