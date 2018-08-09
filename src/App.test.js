import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const host = 'http://localhost:3000';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

it('renders without crashing', () => {

  nock(host)
    .get('/api/survey_results/1')
    .reply(200, {});

  nock(host)
    .get('/api/surveys')
    .reply(200, {});


  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
