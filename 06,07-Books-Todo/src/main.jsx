import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './Context/book.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider value={10}>
      <App />
    </Provider>
  </StrictMode>
)
