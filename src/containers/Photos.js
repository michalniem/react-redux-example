import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { getPhotos } from '../store/api/selectors';
import Photo from '../components/Photo';
import List from './List';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const GridList = styled(List)`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 10px;
`;

const Photos = (props) => (
  <Container>
    {console.log(props)}
    {/* <GridList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <Photo
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      )}
    /> */}
  </Container>
);

const mapStateToProps = state => ({
  photos: getPhotos(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Photos);
