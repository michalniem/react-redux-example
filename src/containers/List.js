import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  grid: {
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: "10px 10px",
  },
};

const List = ({
  classes,
  data,
  renderItem,
  isLoading,
  error,
  limit,
  style,
}) => (
  <React.Fragment>
    {data &&
      <ul className={classes[style]}>
        {data.data.slice(0, limit).map(item =>
          <li key={item.id}>{renderItem(item)}</li>
        )}
      </ul>
    }
    {isLoading && <CircularProgress size={50} />}
    {error && <p>Something is wrong...</p>}
  </React.Fragment>
);

export default withStyles(styles)(List);
