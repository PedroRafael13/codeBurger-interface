import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduts, setCartProduts] = useState([])

  const putProductsInCart = async product => {
    const cartIndex = cartProduts.findIndex(pd => pd.id === product.id)

    let newCartProducts = []
    if (cartIndex > 0) {
      const newCartProducts = cartProduts

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartProduts(newCartProducts)
    }
    else {
      product.quantity = 1
      newCartProducts = [...cartProduts, product]
      setCartProduts(newCartProducts)
    }

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProduts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProduts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used with UserContext")
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
