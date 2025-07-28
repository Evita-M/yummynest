import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store.ts';
import { ModalProvider } from '@/context';
import { Modal } from '@/components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ModalProvider>
            <App />
            <Modal />
          </ModalProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
