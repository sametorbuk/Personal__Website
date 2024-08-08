
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
)
