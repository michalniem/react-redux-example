import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';

const Tab = styled(Link)`
  width: 100px;
  color: ${({ theme }) => theme.colors.regentGrey};
  font-size: ${({ theme }) => theme.size.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

Tab.Container = Container;

export default Tab;
