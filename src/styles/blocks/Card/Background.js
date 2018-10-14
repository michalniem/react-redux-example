import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export default Background;
