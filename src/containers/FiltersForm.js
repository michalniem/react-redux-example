import React from 'react';

import Filed from '../components/Field';

const FiltersForm = () => (
  <form>
    <Filed
      placeholder="Filter by name"
      filterName="text"
    />
    <Filed
      filterName="genres"
    />
  </form>
);

export default FiltersForm;
