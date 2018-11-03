import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';
import { withTheme } from 'styled-components';

import Selection from '../styles/blocks/Select/index';

const Select = ({ options, value, setValue }) => (
  <Selection>
    <div>{value}</div>
    {/* {options.map(option => (
      <option>{option}</option>
    ))} */}
  </Selection>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const enhances = compose(
  withTheme,
  withState('value', 'setValue', 'Choose category'),
  withState('isOpen', 'toggleOpen', false),
);

export default enhances(Select);
