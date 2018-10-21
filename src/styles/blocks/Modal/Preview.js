import styled from 'styled-components';

const Preview = styled.div`
  width: 100%;
  background: url(${({ thubnailUrl }) => thubnailUrl}), linear-gradient(#eb01a5, #d13531);
`;

export default Preview;
