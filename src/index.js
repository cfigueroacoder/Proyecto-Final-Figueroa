import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

import { CartProvider } from './context/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
