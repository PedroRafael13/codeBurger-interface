import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduts, setCartProduts] = useState([])

  const updateLocalStorage = async product => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
  }

  const putProduts = async products => {
    const cartIndex = cartProduts.findIndex(prd => prd.id === products.id)

    let newCartProduct = []
    if (cartIndex > 0) {
      newCartProduct = cartProduts

      newCartProduct[cartIndex].quantity = newCartProduct[cartIndex].quantity + 1

      setCartProduts(newCartProduct)
    }

    else {
      products.quantity = 1
      newCartProduct = ([...cartProduts, products])
      setCartProduts(newCartProduct)
    }

    await updateLocalStorage(newCartProduct)
  }

  const increaseProduct = async productId => {
    const newCart = cartProduts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProduts(newCart)

    await updateLocalStorage(newCart)
  }

  const deleteProduct = async productId => {
    const newCart = cartProduts.filter(product => product.id === productId)

    setCartProduts(newCart)

    await updateLocalStorage(newCart)
  }

  const desncreaseProduct = async productId => {
    const cartIndex = cartProduts.findIndex(pd => pd.id === productId)

    if (cartProduts[cartIndex].quantity > 1) {
      const newCart = cartProduts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProduts(newCart)

      await updatelocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCart = await localStorage.getItem('codeburger:cartinfo')

      if (clientCart) {
        setCartProduts(JSON.parse(clientCart))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProduts, cartProduts, increaseProduct, desncreaseProduct }}
    >{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useUser must be used with UserContext")
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}