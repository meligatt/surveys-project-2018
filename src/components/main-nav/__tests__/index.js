import React from 'react';
import MainNav from '../index';

describe('MainNav', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <MainNav />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
