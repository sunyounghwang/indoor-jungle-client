import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { updatePlant } from '../actions/plants';

class EditForm extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    this.props.updatePlant(values, this.props.match.params.id);
    setSubmitting(false);
    this.props.history.push('/plants');
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
                <label htmlFor="name">Name</label>
                <Field name="name" />
                <ErrorMessage name="name" className="error-message" component="div" />
              </div>
              <div>
                <label htmlFor="type_of">Plant Type</label>
                <Field name="type_of" />
                <ErrorMessage name="type_of" className="error-message" component="div" />
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <Field name="location" />
                <ErrorMessage name="location" className="error-message" component="div" />
              </div>
              <div>
                <label htmlFor="img_url">Image URL (optional)</label>
                <Field name="img_url" />
              </div>
              <button type="submit"
                disabled={formProps.isSubmitting}
                className="btn btn-outline-primary">
                Edit Plant
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
    .required()
    .test("is-blank", "${path} can't be blank", value => {
      return /^\s*$/.test(value) ? false : true;
    }),
  type_of: yup
    .string()
    .required("type is a required field")
    .test("is-blank", "type can't be blank", value => {
      return /^\s*$/.test(value) ? false : true;
    }),
  location: yup
    .string()
    .required()
    .test("is-blank", "${path} can't be blank", value => {
      return /^\s*$/.test(value) ? false : true;
    })
});

const mapDispatchToProps = dispatch => {
  return { updatePlant: (values, id) => dispatch(updatePlant(values, id)) };
};

export default connect(null, mapDispatchToProps)(EditForm);
