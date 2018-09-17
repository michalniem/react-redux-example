import React from 'react';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Photo from '../components/Photo';
import List from '../containers/List';
import WithData from '../hocs/WithData';

const styles = {
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
};

const Photos = ({
  classes,
  photos: { data, isLoading, error }
}) => (
  <div className={classes.conteiner}>
    <Typography variant="headline" component="h1">Photos</Typography>
    {console.log(data)}
      <List
        data={data}
        isLoading={isLoading}
        error={error}
        limit={20}
        renderItem={item => (
          <Photo
            title={item.title}
            thumbnailUrl={item.thumbnailUrl}
          />
        )}
      />
  </div>
);

const enhances = compose(
  WithData('photos'),
  withStyles(styles),
);

export default enhances(Photos);
