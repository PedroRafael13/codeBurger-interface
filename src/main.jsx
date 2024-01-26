import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './container/Login'
import Register from './container/Register'
import GlobalStyle from './style/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register />
    <GlobalStyle />
  </React.StrictMode>,
)
