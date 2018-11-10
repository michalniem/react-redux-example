import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { changeFilters } from '../store/filters/actionCreators';

const Field = ({
  filterName,
  setFilter,
  renderField,
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setFieldValue(value);
    setFilter(filterName, value);
  };

  return renderField(fieldValue, handleChange);
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};

Field.propTypes = {
  filterName: PropTypes.string.isRequired,
  // type: PropTypes.string,
  // placeholder: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  renderField: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setFilter: (filterName, value) => dispatch(changeFilters(filterName, value)),
});

const enhances = compose(
  connect(null, mapDispatchToProps),
);

export default enhances(Field);
