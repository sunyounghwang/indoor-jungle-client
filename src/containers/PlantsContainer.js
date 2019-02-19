import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlants } from '../actions/plants';
import './Plants.css';
import PlantCard from '../components/PlantCard';

class PlantsContainer extends Component {
  componentDidMount() {
    this.props.fetchPlants();
  }

  render() {
    const { url, plants } = this.props;

    return (
      <div className="plants-container">
        <h1>Your Plant Collection</h1>
        <Link to={url}>Add a Plant</Link>

        <div>
          {plants.map((plant, i) => <PlantCard key={i} plant={plant} />)}
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
