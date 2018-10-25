import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import Providers from './hocs/Providers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Providers>
    <Root />
  </Providers>,
  document.getElementById('root'),
);
registerServiceWorker();
