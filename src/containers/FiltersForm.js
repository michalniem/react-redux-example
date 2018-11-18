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
          <option value="">All</option>
          <option value="drama">Drama</option>
          <option value="adventure">Adventure</option>
          <option value="fantasy">Fantasy</option>
          <option value="crime">Crime</option>
          <option value="thriller">Thriller</option>
          <option value="legal">Legal</option>
          <option value="science-fiction">Science-Fiction</option>
          <option value="comedy">Comedy</option>
          <option value="espionage">Espionage</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="western">Western</option>
        </select>
      )}
    />
  </Bar>
);

export default FiltersForm;
