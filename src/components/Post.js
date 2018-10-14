import React from 'react';
import PropTypes from 'prop-types';
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

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default withTheme(Post);
