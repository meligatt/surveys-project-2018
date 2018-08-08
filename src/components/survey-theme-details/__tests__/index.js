import React from 'react';
import SurveyThemeDetails from '../index';

describe('SurveyThemeDetails', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SurveyThemeDetails theme={{questions: []}}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
