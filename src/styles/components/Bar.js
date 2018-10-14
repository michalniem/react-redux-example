import styled from 'styled-components';

const Bar = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.size.large};
`;

export default Bar;
