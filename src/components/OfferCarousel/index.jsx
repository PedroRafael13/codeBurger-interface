import React, { useEffect, useState } from 'react'
import Offer from '../../assets/offers-logo-image.svg'
import { Container, OfferImg, ContainerItens, OfferImage, OfferButton } from './style'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formantCurrency'

export function OfferCarousel() {
  const [offers, setOffer] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(products => products.offer).map(product => {
        return { ...product, formatedPrice: formartCurrency(product.price) }
      })

      setOffer(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ]

  return (
    <Container>
      <OfferImg src={Offer} alt='logo-home' />
      <Carousel itemsToShow={6} style={{ width: '90%' }} breakPoints={breakPoints} >
        {
          offers && offers.map(product => (
            <ContainerItens key={product.id} >
              <OfferImage src={product.url} alt="capa-das-ofertas" />
              <p>{product.name}</p>
              <p>{product.formartCurrency}</p>
              <OfferButton>Peça Agora</OfferButton>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
