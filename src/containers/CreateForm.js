import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
        validationSchema={formSchema}
        render={(formProps: FormikProps) => {
          return (
            <Form>
              <div>
                <Field name="name" placeholder="Name" />
                <ErrorMessage name="name" className="error-message" component="div" />

                <Field name="type_of" placeholder="Type" />
                <ErrorMessage name="type_of" className="error-message" component="div" />

                <Field name="location" placeholder="Location in Home" />
                <ErrorMessage name="location" className="error-message" component="div" />

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

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  type_of: yup
    .string()
    .required("type is a required field"),
  location: yup
    .string()
    .required()
});

const mapDispatchToProps = dispatch => {
  return { createPlant: data => dispatch(createPlant(data)) };
};

export default connect(null, mapDispatchToProps)(CreateForm);
