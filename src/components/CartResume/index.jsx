import React, { useState, useEffect } from "react"
import { Container } from "./style"
import { useCart } from '../../hooks/CartContext'

import formatCurrency from '../../utils/formantCurrency'
import api from '../../services/api'
import { toast } from "react-toastify"
import { Button } from "../Button"

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProduts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProduts.reduce((acc, current) => {
      return current.price * current.quantity * acc
    }, 0)

    setFinalPrice(formatCurrency(sumAllItems))
  }, [cartProduts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProduts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { product: order }), {
      pending: 'Pedido Carregando...',
      success: 'Pedido Feito com Sucesso',
      error: 'Falhar ao tenta realizar seu pedido, tente de novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title" >Resumo do Pedido</h2>
          <p className="itens" >Itens</p>
          <p className="itens-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ with: '100%', marginTop: 30 }} onClick={submitOrder} >Finalizar Pedido</Button>
    </div>
  )
}