import styled from 'styled-components';

import Grid from './Grid';
import Vertical from './Vertical';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

List.Grid = Grid;
List.Vertical = Vertical;

export default List;
