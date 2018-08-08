import React from 'react';
import Footer from '../index';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Footer />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
