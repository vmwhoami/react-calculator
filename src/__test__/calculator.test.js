import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders calculator page correctly', () => {
  const tree = renderer
    .create(
      <div className="maincont">
        <div className="left">
          <h1>Let&lsquo;s do some math</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi impedit hic nostrum error nisi quidem, aliquid rem ad numquam fuga.
          </p>
        </div>
        <div className="right">
          <App />
        </div>
      </div>,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
