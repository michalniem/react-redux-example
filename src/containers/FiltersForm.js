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
    <button type="submit">Submit</button>
  </form>
);


const mapDispatchToProps = dispatch => ({
  setFilter: (filterName, value) => dispatch(changeFilter(filterName, value)),
});

const enhances = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({ name: '' }),

    // validate: (values) => {
    //   const errors = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }

    //   return errors;
    // },

    handleSubmit: (values, { props: { setFilter } }) => {
      setFilter('name', values.name);
    },

    handleChange: (e) => {
      console.log(e);
    },

    displayName: 'filtersForm',
  }),
);

export default enhances(Form);
