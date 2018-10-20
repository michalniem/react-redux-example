import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card';
import P from '../styles/elements/P';

const Movie = ({
  title,
  thumbnailUrl,
}) => (
  <Card>
    <Card.Image thumbnailUrl={thumbnailUrl} />
    <P>{title}</P>
  </Card>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default withTheme(Movie);
