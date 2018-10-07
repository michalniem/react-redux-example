import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.size.xlarge};
  margin: 100px auto;
`;

export default ({
  error,
  retry,
  timedOut,
  pastDelay,
}) => {
  if (error) {
    return (
      <Text>
        Error!
        <button onClick={retry}>Retry</button>
      </Text>
    );
  } else if (timedOut) {
    return (
      <Text>
        Taking a long time...
        <button onClick={retry}>Retry</button>
      </Text>
    );
  } else if (pastDelay) {
    return <Text>Loading...</Text>;
  } else {
    return null;
  }
};
