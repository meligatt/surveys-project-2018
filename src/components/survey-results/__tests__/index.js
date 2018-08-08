import React from 'react';
import SurveyResults from '../index';

describe('SurveyResults', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SurveyResults match ={{params:{id: 1}}}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
