import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reduxStore from '../store/configureStore';
import theme from '../styles/themes';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={reduxStore}>
      {children}
    </ReduxProvider>
  </ThemeProvider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
