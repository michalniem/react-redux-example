import styled from 'styled-components';

const Info = styled.div`
  font-size: ${({ theme }) => theme.size.large};
  color: ${({ theme }) => theme.colors.regentGrey};
  margin-bottom: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Info;
