import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlantsContainer from '../containers/PlantsContainer';

const PlantSubLayout = ({ match }) => (
  <div className="plant-sub-layout">
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => <PlantsContainer url={`${match.url}/new`} />}
      />
      <Route
        path={`${match.path}/new`}
        exact
        render={() => <h1>Create Form</h1>}
      />
      <Redirect to={match.path} />
    </Switch>
  </div>
);

export default PlantSubLayout;
