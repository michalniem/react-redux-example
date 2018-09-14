import React from 'react';
import { compose } from 'redux';

import WithData from '../hocs/WithData';

const Photos = (props) => (
  <div>
    <h1>Photos</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithData('photos'),
);

export default enhances(Photos);
