import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
}

const List = ({
  classes,
  data,
  renderItem,
  isLoading,
  error,
}) => (
  <React.Fragment>
    {data &&
      <ul className={classes.list}>
        {data.data.map(item => 
          <li key={item.id}>{renderItem(item)}</li>
        )}
      </ul>
    }
    {isLoading && <CircularProgress size={50} />}
    {error && <p>Something is wrong...</p>}
  </React.Fragment>
);

export default withStyles(styles)(List);
