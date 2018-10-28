import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { compose, withState } from 'recompose';

import Card from '../styles/blocks/Card';
import Modal from '../styles/blocks/Modal';
import P from '../styles/elements/P';

const Movie = ({
  thumbnailUrl,
  title,
  preview,
  setPreview,
}) => (
  <React.Fragment>
    <Card onClick={() => setPreview(p => !p)}>
      <Card.Image thumbnailUrl={thumbnailUrl} />
    </Card>
    {preview &&
      <Modal.Container onClick={() => setPreview(p => !p)}>
        <Modal>
          <Modal.Preview thumbnailUrl={thumbnailUrl}>
            <P>{title}</P>
          </Modal.Preview>
        </Modal>
      </Modal.Container>
    }
  </React.Fragment>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  preview: PropTypes.bool.isRequired,
  setPreview: PropTypes.func.isRequired,
};

const enhances = compose(
  withTheme,
  withState('preview', 'setPreview', false),
);

export default enhances(Movie);
