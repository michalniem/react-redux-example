import React from 'react';

import P from '../styles/elements/P';

export default ({
  error,
  retry,
  timedOut,
  pastDelay,
}) => {
  if (error) {
    return (
      <P>
        Error!
        <button onClick={retry}>Retry</button>
      </P>
    );
  } else if (timedOut) {
    return (
      <P>
        Taking a long time...
        <button onClick={retry}>Retry</button>
      </P>
    );
  } else if (pastDelay) {
    return <P>Loading...</P>;
  } else {
    return null;
  }
};
