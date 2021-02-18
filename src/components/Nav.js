import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

  <div className="nav-container">

    <NavLink to="/">
      <h1>Math magicians</h1>
    </NavLink>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/quote">Quote</NavLink>
    </nav>
  </div>
);

export default Nav;
