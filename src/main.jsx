import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </StrictMode>,
)
