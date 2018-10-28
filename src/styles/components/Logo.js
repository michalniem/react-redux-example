import styled from 'styled-components';

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: 200;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
`;

export default Logo;
