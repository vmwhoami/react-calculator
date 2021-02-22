import React from 'react';
import renderer from 'react-test-renderer';


it('home renders correctly', () => {
  const tree = renderer
    .create(
      <main className="maincont">
        <article>
          <h1>Welcome to our page!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum, consequatur deserunt sed temporibus optio illo dolorum
            aperiam, repellat ipsum est omnis dolores iure molestiae voluptas
            perferendis ex officia! Porro, deserunt.
        </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum, consequatur deserunt sed temporibus optio illo dolorum
            aperiam, repellat ipsum est omnis dolores iure molestiae voluptas
            perferendis ex officia! Porro, deserunt.
        </p>
        </article>
      </main>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

