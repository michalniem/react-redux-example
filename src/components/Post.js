import React from 'react';
import styled, { withTheme } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const Post = ({ title, body }) => (
  <Paper elevation={1}>
    <Typography variant="headline" component="h3">
      {title}
    </Typography>
    <Typography component="p">
      {body}
    </Typography>
  </Paper>
);

export default withTheme(Post);
