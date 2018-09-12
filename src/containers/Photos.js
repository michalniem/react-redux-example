import React from 'react';
import { compose } from 'redux';

import WithPhotos from '../hocs/WithPhotos';

const Photos = (props) => (
  <div>
    <h1>Photos</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithPhotos,
);

export default enhances(Photos);
