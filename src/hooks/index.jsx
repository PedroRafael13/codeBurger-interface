import React from "react"
import { UserProvider } from "./UserContext"
import PropTypes from 'prop-types'

const AppProvider = ({ children }) => {
  <UserProvider>{children}</UserProvider>
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider