import styled from 'styled-components';

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export default Image;
