import styled from 'styled-components';

const Select = styled.div`
  padding: 10px;
  max-width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 2px;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 30px;
    height: 100%;
    background: ${({ theme }) => theme.colors.orange};
  }

  /* display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  border-radius: 4px;
  transition: .24s cubic-bezier(.4,0,.3,1);
  overflow: hidden; */
`;

// Card.Background = Background;
// Card.Avatar = Avatar;
// Card.Info = Info;
// Card.Header = Header;
// Card.Image = Image;

export default Select;
