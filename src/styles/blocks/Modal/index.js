import styled from 'styled-components';
import Container from './Container';

const Modal = styled.div`
  z-index: 15;
  width: 400px;
  height: 300px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
`;

Modal.Container = Container;

export default Modal;
