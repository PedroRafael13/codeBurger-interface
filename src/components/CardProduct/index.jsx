import React from "react";
import PropTypes from "prop-types"
import { Container, ImageProduct, ProductName, ProductPrice } from "./style";
import { Button } from '../Button'
//import { useCart } from "../../hooks/CartContext";
export function CardProduct({ products }) {
  const { putProduts } = useCart()

  return (
    <Container>
      <ImageProduct src={products.url} />
      <div>
        <ProductName>{products.name}</ProductName>
        <ProductPrice>{products.formartCurrency}</ProductPrice>
        <Button onClick={() => putProduts(products)} >Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  products: PropTypes.object
}