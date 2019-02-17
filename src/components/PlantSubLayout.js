import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlantsContainer from '../containers/PlantsContainer';
import CreateForm from '../containers/CreateForm';

const PlantSubLayout = ({ match }) => (
  <div className="plant-sub-layout">
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => <PlantsContainer url={`${match.url}/new`} />}
      />
      <Route path={`${match.path}/new`} exact component={CreateForm} />
      <Redirect to={match.path} />
    </Switch>
  </div>
);

export default PlantSubLayout;
