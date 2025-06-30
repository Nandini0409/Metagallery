import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppKitProvider } from './utils/connectWallet.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>,
)
