import React from 'react'
import CartHome from '../../assets/cart-image.svg'
import { Container, CartImg, Wrappper } from './style'

function Cart() {
  return (
    <Container>
      <CartImg src={CartHome} alt='logo-home' />
      <Wrappper>
      </Wrappper>
    </Container>
  )
}

export default Cart