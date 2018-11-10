import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Filed from '../components/Field';
import { changeFilters } from '../store/filters/actionCreators';

const FiltersForm = () => (
  <form>
    <Filed
      type="text"
      placeholder="Filter by name"
      filterName="text"
    />
    <Filed
      type="text"
    />
    <button type="submit">Submit</button>
  </form>
);


// const mapDispatchToProps = dispatch => ({
//   setFilter: filters => dispatch(changeFilters(filters)),
// });

const enhances = compose(
  // connect(null, mapDispatchToProps),
);

export default enhances(FiltersForm);
