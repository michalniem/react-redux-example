import React from 'react';
import styled, { withTheme } from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  border-radius: 4px;
  transition: .24s cubic-bezier(.4,0,.3,1);
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
  }

`;

const CardMedia = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

const CardHeader = styled.h2`
  font-size: ${({ theme }) => theme.size.large};
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.regentGrey};
  margin: 10px 0;
  padding: 0 10px;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  padding: 0 10px;
`;

const Photo = ({ title, thumbnailUrl }) => (
  <Card>
    <CardMedia thumbnailUrl={thumbnailUrl} />
    <CardHeader>Example header</CardHeader>
    <CardTitle>{title}</CardTitle>
  </Card>
);

export default withTheme(Photo);
