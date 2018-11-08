import React from 'react';
import { compose } from 'redux';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';

import { changeFilters } from '../store/filters/actionCreators';

const FiltersForm = () => (
  <Form>
    <Field
      type="text"
      name="name"
    />
    <Field
      type="text"
      name="genres"
    />
    <button type="submit">Submit</button>
  </Form>
);


const mapDispatchToProps = dispatch => ({
  setFilter: filters => dispatch(changeFilters(filters)),
});

const enhances = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({
      name: '',
      genres: '',
    }),

    // validate: (values) => {
    //   const errors = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }

    //   return errors;
    // },

    handleSubmit: (values, { props: { setFilter } }) => {
      setFilter(values);
    },

    displayName: 'filtersForm',
  }),
);

export default enhances(FiltersForm);
