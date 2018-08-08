import React from 'react';
import Header from '../index';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Header />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
