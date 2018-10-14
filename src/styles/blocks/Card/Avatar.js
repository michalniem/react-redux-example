import styled from 'styled-components';

const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: white;
  transform: translateY(-50px);
  overflow: hidden;
  &:before {
    content: '';
    margin-top: 10px;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url('https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Avatar;
