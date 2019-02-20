import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlants, destroyPlant } from '../actions/plants';
import './Plants.css';
import PlantCard from '../components/PlantCard';

class PlantsContainer extends Component {
  componentDidMount() {
    this.props.fetchPlants();
  }

  render() {
    const { url, plants, destroyPlant } = this.props;

    return (
      <div className="plants-container">
        <h1>Your Plant Collection</h1>
        <Link to={url}>Add a Plant</Link>

        <div>
          {plants.map((plant, i) =>
            <PlantCard
              key={i}
              plant={plant}
              destroyPlant={destroyPlant}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlants: () => dispatch(fetchPlants()),
    destroyPlant: id => dispatch(destroyPlant(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);
