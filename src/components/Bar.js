import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import NavBar from './NavBar';

const Bar = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.size.large};
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.size.large};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
`;

const AppBar = () => (
  <Bar>
    <Logo
      component={Link}
      to="/"
    >
      React-redux-example
    </Logo>
    <NavBar />
  </Bar>
);

export default withTheme(AppBar);
