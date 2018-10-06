import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styled, { withTheme } from 'styled-components';

const Tabs = styled.div`
  display: flex;
  height: 100%;
`;

const Tab = styled(Link)`
  width: 100px;
  color: ${({ theme }) => theme.colors.regentGrey};
  font-size: ${({ theme }) => theme.size.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const NavBar = () => (
  <Tabs>
    <Tab to="/photos">Photos</Tab>
    <Tab to="/users">Users</Tab>
    <Tab to="/posts">Posts</Tab>
  </Tabs>
);

const enhances = compose(
  withRouter,
  withTheme,
);

export default enhances(NavBar);
