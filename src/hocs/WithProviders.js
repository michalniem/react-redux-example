import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import reduxStore from '../store/configureStore';

const WithProviders = Component =>
  () => (
    <ReduxProvider store={reduxStore}>
      <Component />
    </ReduxProvider>
  );

  export default WithProviders;
