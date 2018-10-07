import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import usersSelector from '../store/api/selectors/users';

const Users = ({
  users: {
    data,
    isLoading,
    error,
  }
}) => (
  <div>
    <h1>Users</h1>
  </div>
);

const mapStateToProps = state => ({
  users: usersSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Users);
