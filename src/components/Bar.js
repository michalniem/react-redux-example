import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavBar from './NavBar';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
  },
  typographyLink: {
    textDecoration: 'none',
  }
};

const Bar = ({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar className={classes.toolbar}>
      <Typography
        className={classes.typographyLink}
        variant="title"
        color="inherit"
        component={Link}
        to="/"
      >
        React-redux-example
      </Typography>
      <NavBar />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Bar);