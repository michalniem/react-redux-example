import React from 'react';
import { withTheme } from 'styled-components';

import Bar from '../styles/components/Bar';
import Logo from '../styles/components/Logo';
import NavBar from './NavBar';

const AppBar = () => (
  <Bar>
    <Logo
      to="/"
    >
      React-redux-example
    </Logo>
    <NavBar />
  </Bar>
);

export default withTheme(AppBar);
