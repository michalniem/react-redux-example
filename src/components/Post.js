import React from 'react';
import { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card/index';
import P from '../styles/elements/P';

const Post = ({ title, body }) => (
  <Card>
    <Card.Header>
      {title}
    </Card.Header>
    <P>
      {body}
    </P>
  </Card>
);

export default withTheme(Post);
