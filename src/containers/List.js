import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const List = ({
  data,
  renderItem,
  isLoading,
  error,
  className,
}) => (
  <React.Fragment>
    {data && (
      <ul className={className}>
        {data.data.map(item => <li key={item.id}>{renderItem(item)}</li>)}
      </ul>
    )}
    {isLoading && <CircularProgress size={50} />}
    {error && <p>Something is wrong...</p>}
  </React.Fragment>
);

export default List;
