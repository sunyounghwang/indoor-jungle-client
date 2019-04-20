import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlantsContainer from '../containers/PlantsContainer';
import CreateForm from '../containers/CreateForm';
import EditForm from '../containers/EditForm';

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
      <Route path={`${match.path}/new`} exact component={CreateForm} />
      <Route path={`${match.path}/:id/edit`} exact component={EditForm} />
      <Redirect to={match.path} />
    </Switch>
  </div>
);

export default PlantSubLayout;
