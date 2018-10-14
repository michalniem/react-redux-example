import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';

import usersSelector from '../store/api/selectors/users';
import User from '../components/User';
import List from '../styles/blocks/List';

const Users = ({
  users: {
    data,
    isLoading,
    error,
  },
}) => (
  <List>
    <List.Grid
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <User
          name={item.name}
          email={item.email}
          website={item.website}
        />
      )}
    />
  </List>
);

const mapStateToProps = state => ({
  users: usersSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

Users.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default enhances(Users);
