import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlant } from '../actions/plants';

class CreateForm extends Component {
  state = {
    name: "",
    type_of: "",
    location: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPlant(this.state);
  }

  render() {
    return (
      <div className="create-form">
        <h1>Plant Details</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.name}
            /><br />
            <input
              name="type_of"
              placeholder="Type"
              onChange={this.handleChange}
              value={this.state.type_of}
            /><br />
            <input
              name="location"
              placeholder="Location in Home"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </div>
          <input
            type="submit"
            value="Create Plant"
            className="btn btn-outline-primary"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

const mapDispatchToProps = dispatch => {
  return { createPlant: data => dispatch(createPlant(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
