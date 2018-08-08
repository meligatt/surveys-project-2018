import React from 'react';
import renderer from 'react-test-renderer';
import AverageRatingPerQuestion from '../index';

describe('AverageRatingPerQuestion', () => {
  it('renders correctly', () => {
    const themesMock = [{
        name : "theme 1",
        questions: [],
      },
      {
        name : "theme 2",
        questions: [],
      }];

    const tree = renderer.create(
      <AverageRatingPerQuestion themes = {themesMock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders null when empty themes is passed as prop', () => {
    const themesMock = [];

    const tree = renderer.create(
      <AverageRatingPerQuestion themes = {themesMock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
