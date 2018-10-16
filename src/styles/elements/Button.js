
import styled from 'styled-components';

const Button = styled.div`
  padding: 10px;
  width: 100px;
  font-weight: 200;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.orange};
  border-radius: 20px;
  margin: 20px auto 0 auto;
  transition: .5s;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.orange};
    color: white;
  }
`;

export default Button;
