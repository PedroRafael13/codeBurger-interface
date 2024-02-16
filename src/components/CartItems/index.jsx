import React from 'react'
import { useCart } from '../../hooks/CartContext'
import { Container, Header, Body, EmptyCart } from './style'
import formatCurrency from '../../utils/formatCurrency'

export function CartItems() {
  const { cartProduts } = useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }} >Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProduts && cartProduts.length > 0 ?
        cartProduts.map((product) => (
          <Body key={product.id} >
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.prince)}</p>
          </Body>
        ))
        : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )
      }
    </Container>
  )
}
