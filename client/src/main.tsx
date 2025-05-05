import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { ModalProvider } from '@/context/ModalContext'
import { Modal } from '@/components/Modal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <App />
          <Modal />
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
