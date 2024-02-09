import React from 'react'
import LogoHome from '../../assets/code-logo.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
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