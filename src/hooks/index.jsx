import React from "react"
import { UserProvider } from "./UserContext"
import { CartProvider } from "./CartContext"
import PropTypes from 'prop-types'

const AppProvider = ({ children }) => {
  <CartProvider>
    <UserProvider>{children}</UserProvider>
  </CartProvider>
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider