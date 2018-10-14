import styled from 'styled-components';

const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.regentGrey};
  opacity: .5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container;
