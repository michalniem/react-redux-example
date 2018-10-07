import React from 'react';
import styled, { withTheme } from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  border-radius: 4px;
  transition: .24s cubic-bezier(.4,0,.3,1);
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
  }
`;

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

const Data = styled.div`
  font-size: ${({ theme }) => theme.size.large};
  color: ${({ theme }) => theme.colors.regentGrey};
  margin: 10px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  padding: 0 10px;
`;

const User = ({ name }) => (
  <Card>
    <Background />
    <Avatar />
    <Data>{name}</Data>
  </Card>
);

export default withTheme(User);
