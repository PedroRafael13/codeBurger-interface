import React from "react"
import { Container } from "./style"
import Button from '../Button'

export function CartResume() {
  return (
    <>
      <Container>
        <div className="container-top">
          <h2 className="title" >Resumo do Pedido</h2>
          <p className="itens" >Itens</p>
          <p className="itens-price" >R$ 10,00</p>
          <p className="delivery-tax" >Taxa de Entrega</p>
          <p className="delivery-tax-price" >R$ 10,00</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>R$ 16,00</p>
        </div>
      </Container>
      <Button>Finalizar Pedido</Button>
    </>
  )
}