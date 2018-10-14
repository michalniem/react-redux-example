import styled from 'styled-components';

const Header = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.size.regular};
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.regentGrey};
  margin: 10px 0;
  padding: 0 10px;
`;

export default Header;
