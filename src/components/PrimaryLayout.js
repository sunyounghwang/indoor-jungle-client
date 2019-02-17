import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import PlantSubLayout from './PlantSubLayout';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/plants" render={PlantSubLayout} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
