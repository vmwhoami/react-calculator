import React from 'react';
import renderer from 'react-test-renderer';


it('renders quote page correctly', () => {
  const tree = renderer
    .create(
      <main className="maincont">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cum odit doloremque laboriosam similique inventore amet,
          magni accusamus veniam saepe asperiores eveniet
          voluptatem dolorum quaerat animi neque, molestias
          consequatur aut quis?
</p>
      </main>


    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


