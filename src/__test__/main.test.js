import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import Home from '../pages/home';
import Calculator from '../pages/calculator';
import Quote from '../pages/quote';

it('main renders correctly', () => {
  const tree = renderer
    .create(
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/calculator" component={Calculator} />
            <Route path="/quote" component={Quote} />
          </Switch>
        </BrowserRouter>
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

