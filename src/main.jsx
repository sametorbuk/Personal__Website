
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
)
