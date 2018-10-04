import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { getUsers } from '../store/api/selectors';

const Users = (props) => (
  <div>
    {console.log(props)}
    <h1>Users</h1>
  </div>
);

const mapStateToProps = state => ({
  photos: getUsers(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Users);
