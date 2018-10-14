import styled from 'styled-components';

const P = styled.p`
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  margin: 0;
  margin-bottom: 10px;
`;

export default P;
