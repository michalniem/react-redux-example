import React from 'react';
import styled, { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card';
import P from '../styles/elements/P';

const Photo = ({ title, thumbnailUrl }) => (
  <Card>
    <Card.Image thumbnailUrl={thumbnailUrl} />
    <Card.Header>Example header</Card.Header>
    <P>{title}</P>
  </Card>
);

export default withTheme(Photo);
