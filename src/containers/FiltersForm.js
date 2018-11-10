import React from 'react';

import Filed from '../components/Field';
import Bar from '../styles/components/Bar';

const FiltersForm = () => (
  <Bar>
    <Filed
      placeholder="Filter by name"
      filterName="text"
      renderField={(fieldValue, handleChange) => (
        <input
          placeholder="filter by name"
          value={fieldValue}
          onChange={handleChange}
        />
      )}
    />
    <Filed
      filterName="genres"
      renderField={(fieldValue, handleChange) => (
        <select
          value={fieldValue}
          onChange={handleChange}
        >
          <option />
          <option value="thriller">Thriller</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
        </select>
      )}
    />
  </Bar>
);

export default FiltersForm;
