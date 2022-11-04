import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import { CartProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
