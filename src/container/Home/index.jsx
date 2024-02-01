import React from 'react'
import LogoHome from '../../assets/home-image.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCarousel'
import { Container, HomeImg } from './style'

function Home() {
  return (
    <Container>
      <HomeImg src={LogoHome} alt='logo-home' />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}

export default Home