import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduts, setCartProduts] = useState({})

  const putProduts = async userInfo => {
    setCartProduts(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')

      if (clientInfo) {
        setCartProduts(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProduts, cartProduts }}>{children}</CartContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(cartProduts)

  if (!context) {
    throw new Error("useUser must be used with UserContext")
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}