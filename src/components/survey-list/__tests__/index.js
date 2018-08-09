import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import React from 'react';
import SurveyList from '../index';

const host = 'http://localhost:3000';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('SurveyList', () => {
  it('renders correctly', () => {

    nock(host)
      .get('/api/surveys')
      .reply(200, { survey_results: [] });

    const wrapper = shallow(
      <SurveyList />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
