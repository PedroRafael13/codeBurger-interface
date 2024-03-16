import React from "react"

import PropTypes from "prop-types"

import { UserProvider } from "./UserContext"
import { CartProvider } from "./CartContext"

const AppProvaider = ({ childen }) => (
  <UserProvider>
    <CartProvider>{childen}</CartProvider>
  </UserProvider>
)

AppProvaider.prototype = {
  childen: PropTypes.node
}

export default AppProvaider