import React from "react";
import PropTypes from "prop-types"
import { Container, ImageProduct, ProductName, ProductPrice } from "./style";
import Button from '../Button'

function CardProduct({ products }) {
  return (
    <Container>
      <ImageProduct src={products.url} />
      <div>
        <ProductName>{products.name}</ProductName>
        <ProductPrice>{products.formartCurrency}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  products: PropTypes.object
}