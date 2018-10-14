import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card';
import P from '../styles/elements/P';

const Photo = ({ title, thumbnailUrl }) => (
  <Card>
    <Card.Image thumbnailUrl={thumbnailUrl} />
    <Card.Header>Example header</Card.Header>
    <P>{title}</P>
  </Card>
);

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default withTheme(Photo);
