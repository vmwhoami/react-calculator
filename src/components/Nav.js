import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/calculator">Calculator</NavLink>
    <NavLink to="/quote">Quote</NavLink>
  </>
);

export default Nav;
