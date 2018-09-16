import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Post = ({ classes, title, body }) => (
  <Paper className={classes.root} elevation={1}>
    <Typography variant="headline" component="h3">
      {title}
    </Typography>
    <Typography component="p">
      {body}
    </Typography>
  </Paper>
);

export default withStyles(styles)(Post);
