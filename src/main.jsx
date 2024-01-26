import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Login from './container/Login'
import Register from './container/Register'
import GlobalStyle from './style/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer />
    <GlobalStyle />
  </React.StrictMode>,
)
