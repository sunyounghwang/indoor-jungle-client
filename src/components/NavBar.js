import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  textDecoration: 'underline'
};

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="sm">
        <Navbar.Brand>Indoor Jungle</Navbar.Brand>
        <Navbar.Collapse>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/plants" activeStyle={activeStyle}>Plants</NavLink>
        </Navbar.Collapse>
        <Navbar.Text>
          Favicon by <a href="https://icons8.com/">Icons8</a>
        </Navbar.Text>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
