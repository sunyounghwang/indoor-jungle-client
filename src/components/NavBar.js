import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="sm">
        <Navbar.Brand>Indoor Jungle</Navbar.Brand>
        <Navbar.Collapse>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
