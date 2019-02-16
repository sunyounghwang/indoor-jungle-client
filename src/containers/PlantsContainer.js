import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import Plant from '../components/Plant';

class PlantsContainer extends Component {
  componentDidMount() {
    this.props.fetchPlants();
  }

  render() {
    return (
      <div>
        <h1>
          Your Plant Collection
        </h1>
        <div>
          {this.props.plants.map((plant, i) => <Plant key={i} plant={plant} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

const mapDispatchToProps = dispatch => {
  return { fetchPlants: () => dispatch(fetchPlants()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);
