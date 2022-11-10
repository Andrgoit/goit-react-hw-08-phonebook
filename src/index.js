import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* для гита */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          {/* <BrowserRouter> */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
