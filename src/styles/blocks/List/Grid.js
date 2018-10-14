import styled from 'styled-components';
import List from '../../../containers/List';

const GridList = styled(List)`
  width: 100%;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default GridList;
