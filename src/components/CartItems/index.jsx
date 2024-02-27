import React from 'react'
//import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formantCurrency'
import { Container, Header, Body, EmptyCart } from './style'


export function CartItems() {
  //const { cartProduts, increaseProduct, desncreaseProduct } = useCart()

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
            <div className='quantity-container' >
              <button onClick={() => desncreaseProduct(product.id)} >-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProduct(product.id)} >+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
        : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )
      }
    </Container>
  )
}
