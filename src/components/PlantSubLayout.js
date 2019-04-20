import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlantsContainer from '../containers/PlantsContainer';
import PlantForm from '../containers/PlantForm';

const PlantSubLayout = ({ match }) => (
  <div className="plant-sub-layout">
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => <PlantsContainer
          newURL={`${match.url}/new`}
          editURL={`${match.url}/:id/edit`} />}
      />
      <Route path={`${match.path}/new`} exact render={routeProps => <PlantForm {...routeProps} formType={"create"} />} />
      <Route path={`${match.path}/:id/edit`} exact render={routeProps => <PlantForm {...routeProps} formType={"edit"} />} />
      <Redirect to={match.path} />
    </Switch>
  </div>
);

export default PlantSubLayout;
