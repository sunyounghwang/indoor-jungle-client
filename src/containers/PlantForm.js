import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { createPlant, updatePlant } from '../actions/plants';

class PlantForm extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    const { formType, createPlant, updatePlant, match } = this.props;
    formType === "create" ? createPlant(values) : updatePlant(values, match.params.id);
    setSubmitting(false);
    this.props.history.push('/plants');
  }

  render() {
    const { formType, plant } = this.props;
    let initialValues = {
      name: "",
      type_of: "",
      location: "",
      img_url: ""
    };
    initialValues = formType === "edit" ? plant : initialValues;
    const heading = formType === "edit" ? `Edit ${plant.name || "a Plant"}` : "Add a Plant";
    const buttonText = formType === "edit" ? "Edit Plant" : "Add Plant";

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={formSchema}
        render={(formProps: FormikProps) => {
          return (
            <div className="form-container">
              <h1>{heading}</h1>
              <Form>
                <div className="form-group row">
                  <label htmlFor="name">Name</label>
                  <Field className="form-control" name="name" />
                  <ErrorMessage name="name" className="error-message" component="div" />
                </div>
                <div className="form-group row">
                  <label htmlFor="type_of">Plant Type</label>
                  <Field className="form-control" name="type_of" />
                  <ErrorMessage name="type_of" className="error-message" component="div" />
                </div>
                <div className="form-group row">
                  <label htmlFor="location">Location</label>
                  <Field className="form-control" name="location" />
                  <ErrorMessage name="location" className="error-message" component="div" />
                </div>
                <div className="form-group row">
                  <label htmlFor="img_url">Image URL (optional)</label>
                  <Field className="form-control" name="img_url" />
                </div>
                <button type="submit"
                  disabled={formProps.isSubmitting}
                  className="btn btn-outline-primary">
                  {buttonText}
                </button>
              </Form>
            </div>
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

const mapStateToProps = (state, ownProps) => {
  const plant = state.plants.find(plant => plant.id === +ownProps.match.params.id);
  return plant ? { plant: plant } : { plant: {} };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlant: values => dispatch(createPlant(values)),
    updatePlant: (values, id) => dispatch(updatePlant(values, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantForm);
