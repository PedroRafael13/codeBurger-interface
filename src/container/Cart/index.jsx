import React from 'react'
import CartHome from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './style'

function Cart() {
  return (
    <Container>
      <Wrappper>
        <CartImg src={CartHome} alt='logo-home' />
        <CartItems />
      </Wrappper>
    </Container>
  )
}

export default Cart