import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import usersSelector from '../store/api/selectors/users';
import User from '../components/User';
import List from './List';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const GridList = styled(List)`
  width: 100%;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 10px;
`;

const Users = ({
  users: {
    data,
    isLoading,
    error,
  }
}) => (
  <Container>
    {console.log(data)}
    <GridList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <User name={item.name} />
      )}
    />
  </Container>
);

const mapStateToProps = state => ({
  users: usersSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Users);
