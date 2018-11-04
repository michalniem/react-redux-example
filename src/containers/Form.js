import React from 'react';
import { compose } from 'redux';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import { changeFilter } from '../store/filters/actionCreators';

const Form = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      name="name"
    />
    {/* {errors.name && touched.name && <div id="feedback">{errors.name}</div>} */}
    <button type="submit">Submit</button>
  </form>
);

const enhances = compose(
  withFormik({
    mapPropsToValues: () => ({ name: '' }),

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 1000);
      console.log(values);
    },

    handleChange: (e) => {
      console.log(e);
    },

    displayName: 'BasicForm',
  }),
);

export default enhances(Form);
