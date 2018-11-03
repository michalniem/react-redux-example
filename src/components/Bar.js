import React from 'react';
import { withTheme } from 'styled-components';

import Bar from '../styles/components/Bar';
import Logo from '../styles/components/Logo';

const AppBar = () => (
  <Bar>
    <Logo>
      React-redux-example
    </Logo>
  </Bar>
);

export default withTheme(AppBar);
