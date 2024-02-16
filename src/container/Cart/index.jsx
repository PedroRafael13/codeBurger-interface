import React from 'react'
import CartHome from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './style'

function Cart() {
  return (
    <Container>
      <CartImg src={CartHome} alt='logo-home' />
      <CartItems />
    </Container>
  )
}

export default Cart