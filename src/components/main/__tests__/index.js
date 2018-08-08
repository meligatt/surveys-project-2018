import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../index';

describe('Main', () => {
   it('renders correctly', () => {
     const tree = renderer.create(
       <Main>
         <div>some</div>
         <div>children</div>
       </Main>
    ).toJSON();

    expect(tree).toMatchSnapshot();
   })
});
