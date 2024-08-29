import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/scss/main.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <App />
  </React.StrictMode>
);
