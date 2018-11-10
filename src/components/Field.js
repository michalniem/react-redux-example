import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { changeFilters } from '../store/filters/actionCreators';

const Field = ({
  filterName,
  type,
  placeholder,
  setFilter,
}) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    setFilter(filterName, value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};

Field.propTypes = {
  filterName: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  setFilter: PropTypes.function.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setFilter: (filterName, value) => dispatch(changeFilters(filterName, value)),
});

const enhances = compose(
  connect(null, mapDispatchToProps),
);

export default enhances(Field);
