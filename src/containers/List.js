import React from 'react';

const List = ({
  data,
  renderItem,
  className,
}) => (
  <React.Fragment>
    {data && (
      <ul className={className}>
        {data.map(item => <li key={item.id}>{renderItem(item)}</li>)}
      </ul>
    )}
  </React.Fragment>
);

export default List;
