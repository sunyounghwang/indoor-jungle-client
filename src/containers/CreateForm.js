import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createPlant } from '../actions/plants';

class CreateForm extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    this.props.createPlant(values);
    this.props.history.push('/plants');
    setSubmitting(false);
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          type_of: "",
          location: "",
          img_url: ""
        }}
        onSubmit={this.handleSubmit}
        render={(formProps: FormikProps) => {
          return (
            <Form>
              <div>
                <Field name="name" placeholder="Name" />
                <Field name="type_of" placeholder="Type" />
                <Field name="location" placeholder="Location in Home" />
                <Field name="img_url" placeholder="Image URL (optional)" />
              </div>
              <button
                type="submit"
                disabled={formProps.isSubmitting}
                className="btn btn-outline-primary">
                Add Plant
              </button>
            </Form>
          );
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { createPlant: data => dispatch(createPlant(data)) };
};

export default connect(null, mapDispatchToProps)(CreateForm);
