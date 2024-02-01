import React, { useEffect, useState } from 'react'
import formantCurrency from '../../utils/formantCurrency'
import Offer from '../../assets/offers-logo-image.svg'
import { Container, OfferImg, ContainerItens, OfferImage, OfferButton } from './style'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

function OfferCarousel() {
  const [offers, setOffer] = useState([])

  useEffect(() => {
    async function loadOffer() {
      const { data } = await api.get('products')

      setOffer(onlyOffers)
    }

    const onlyOffers = data.filter(product => product.offer)
      .map(product => {
        return { ...product, formatedPrince: formantCurrency(product.prince) }
      })

    loadOffer()
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
              <p>{product.formatedPrince}</p>
              <OfferButton>Peça Agora</OfferButton>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default OfferCarousel