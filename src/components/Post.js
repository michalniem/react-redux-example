import React from 'react';
import styled, { withTheme } from 'styled-components';

const Card = styled.div`
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

const CardHeader = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.size.large};
  text-transform: uppercase;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.regentGrey};
  margin: 10px 0;
  padding: 0 10px;
`;

const CardBody = styled.h3`
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.regentGrey};
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Post = ({ title, body }) => (
  <Card>
    <CardHeader>
      {title}
    </CardHeader>
    <CardBody>
      {body}
    </CardBody>
  </Card>
);

export default withTheme(Post);
