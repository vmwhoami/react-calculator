import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from './home';
import Calculator from './calculator';

const Main = () => (
  <div className="container">

    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Main;
