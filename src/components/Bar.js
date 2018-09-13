import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavBar from './NavBar';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
  },
};

const Bar = ({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar className={classes.toolbar}>
      <Typography variant="title" color="inherit">
        React-redux-example
      </Typography>
      <NavBar />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Bar);