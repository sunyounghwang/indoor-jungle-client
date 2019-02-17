import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlantsContainer from '../containers/PlantsContainer';

const PlantSubLayout = ({ match }) => (
  <div className="plant-sub-layout">
    <Switch>
      <Route path={match.path} exact component={PlantsContainer} />
    </Switch>
  </div>
);

export default PlantSubLayout;
