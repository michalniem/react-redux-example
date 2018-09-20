import React from 'react';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { jsonPlaceholder } from '../axiosConfig';

import Post from '../components/Post';
import List from './List';
import WithData from '../hocs/WithData';

const styles = {
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

const Posts = ({
  classes,
  data: { data, isLoading, error },
}) => (
  <div className={classes.conteiner}>
    <Typography variant="headline" component="h1">Posts</Typography>
    <List
      data={data}
      isLoading={isLoading}
      error={error}
      className={classes.list}
      renderItem={item => (
        <Post
          title={item.title}
          body={item.body}
        />
      )}
    />
  </div>
);

const enhances = compose(
  WithData('users', jsonPlaceholder.get('posts')),
  withStyles(styles),
);

export default enhances(Posts);
