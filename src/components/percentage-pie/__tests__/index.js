import React from 'react';
import PercentagePie from '../index';

describe('PercentagePie', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <PercentagePie />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
