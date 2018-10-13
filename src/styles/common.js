import styled from 'styled-components';
import List from '../containers/List';

const GridListContainer = styled.div`
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
  grid-template-columns: 1fr;
  grid-gap: 10px 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const VerticalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const VerticalList = styled(List)`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

export {
  GridListContainer,
  GridList,
  VerticalListContainer,
  VerticalList,
};
