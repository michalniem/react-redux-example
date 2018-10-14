import React from 'react';
import { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card';
import P from '../styles/elements/P';

const User = ({ name, email }) => (
  <Card>
    <Card.Background />
    <Card.Avatar />
    <Card.Info>
      <P>{name}</P>
      <P>{email}</P>
    </Card.Info>
  </Card>
);

export default withTheme(User);
