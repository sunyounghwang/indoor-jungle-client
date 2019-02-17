import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <NavBar />
    <main>
      <Route exact path="/" render={Home} />
    </main>
  </div>
);

export default PrimaryLayout;
