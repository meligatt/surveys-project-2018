import React from 'react';
import SurveyList from '../index';

describe('SurveyList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SurveyList />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
