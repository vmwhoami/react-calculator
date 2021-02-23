import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

it('renders quote page correctly', () => {
  const tree = renderer
    .create(
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
