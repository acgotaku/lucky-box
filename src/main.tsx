import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { StoreProvider, store } from '@/stores';
import '@/styles/index.css';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <Theme>
        <App />
      </Theme>
    </StoreProvider>
  </React.StrictMode>
);
