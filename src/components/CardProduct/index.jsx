import React from "react";
import PropTypes from "prop-types"
import { Container, ImageProduct, ProductName, ProductPrice } from "./style";
import { Button } from '../Button'
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart()

  return (
    <Container>
      <ImageProduct src={products.url} />
      <div>
        <ProductName>{products.name}</ProductName>
        <ProductPrice>{products.formartCurrency}</ProductPrice>
        <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  products: PropTypes.object
}