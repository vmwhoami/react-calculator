import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from './home';
import Calculator from './calculator';
import Quote from './quote';

const Main = () => (
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
);

export default Main;
