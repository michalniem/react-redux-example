import styled from 'styled-components';

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
    filter: grayscale(100%);
  }
`;

export default Image;
