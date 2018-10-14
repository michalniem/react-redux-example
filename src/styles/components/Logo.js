import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.size.large};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
`;

export default Logo;
