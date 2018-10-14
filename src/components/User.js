import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Card from '../styles/blocks/Card';
import Modal from '../styles/blocks/Modal';
import P from '../styles/elements/P';

class User extends React.Component {
  state = {
    modal: false,
  };

  handleClick = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const { name, email } = this.props;
    const { modal } = this.state;
    return (
      <React.Fragment>
        <Card onClick={this.handleClick}>
          <Card.Background />
          <Card.Avatar />
          <Card.Info>
            <P>{name}</P>
            <P>{email}</P>
          </Card.Info>
        </Card>
        {modal &&
          <Modal.Container onClick={this.handleClick}>
            <Modal>
              hello
            </Modal>
          </Modal.Container>
        }
      </React.Fragment>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default withTheme(User);
