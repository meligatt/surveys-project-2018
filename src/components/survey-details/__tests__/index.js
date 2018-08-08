import React from 'react';
import SurveyDetails from '../index';

describe('SurveyDetails', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SurveyDetails />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
