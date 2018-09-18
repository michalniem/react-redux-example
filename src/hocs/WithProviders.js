import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reduxStore from '../store/configureStore';

const WithProviders = WrappedComponent => () => (
  <ReduxProvider store={reduxStore}>
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  </ReduxProvider>
);

export default WithProviders;
