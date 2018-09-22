import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import reduxStore from '../store/configureStore';
import theme from '../styles/themes';

const WithProviders = WrappedComponent => () => (
  <ReduxProvider store={reduxStore}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <WrappedComponent />
      </ThemeProvider>
    </BrowserRouter>
  </ReduxProvider>
);

export default WithProviders;
