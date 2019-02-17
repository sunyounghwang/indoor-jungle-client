import React, { Component } from 'react';

class CreateForm extends Component {
  render() {
    return (
      <div className="create-form">
        <h1>Plant Details</h1>

        <form>
          <div className="form-group">
            <input name="name" placeholder="Name" /><br />
            <input name="type_of" placeholder="Type" /><br />
            <input name="location" placeholder="Location in Home" />
          </div>
          <input type="submit" value="Create Plant" className="btn btn-outline-primary" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
