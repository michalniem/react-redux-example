import styled from 'styled-components';

import Image from './Image';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  border-radius: 4px;
  transition: .24s cubic-bezier(.4,0,.3,1);
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
    cursor: pointer;
  }
`;

Card.Image = Image;

export default Card;
