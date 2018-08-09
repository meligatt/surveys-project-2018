import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import React from 'react';
import SurveyResults from '../index';

const host = 'http://localhost:3000';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('SurveyResults', () => {
  it('renders correctly', () => {

    nock(host)
      .get('/api/survey_results/1')
      .reply(200, { survey_result_detail: {} });


    const wrapper = shallow(
      <SurveyResults match ={{params:{id: 1}}}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
