import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withTheme } from 'styled-components';

import Tab from '../styles/blocks/Tab/index';

const NavBar = () => (
  <Tab.Container>
    <Tab to="/photos">Photos</Tab>
    <Tab to="/users">Users</Tab>
    <Tab to="/posts">Posts</Tab>
  </Tab.Container>
);

const enhances = compose(
  withRouter,
  withTheme,
);

export default enhances(NavBar);
