import React from 'react';
import PropTypes from 'prop-types';

const List = ({
  data,
  renderItem,
  className,
}) => (
  <React.Fragment>
    {data ?
      <ul className={className}>
        {data.map(item => <li key={item.id}>{renderItem(item)}</li>)}
      </ul> :
      <p>Loading...</p>
    }
  </React.Fragment>
);

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default List;
