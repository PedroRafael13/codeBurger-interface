import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyle from './style/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer />
    <GlobalStyle />
  </React.StrictMode>,
)
