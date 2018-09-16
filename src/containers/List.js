import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const List = ({
  data,
  renderItem,
  isLoading,
  error,
}) => (
  <React.Fragment>
    {data &&
      <ul>
        {data.data.map(item => renderItem(item))}
      </ul>
    }
    {isLoading && <CircularProgress size={50} />}
    {error && <p>Something is wrong...</p>}
  </React.Fragment>
);

export default List;
