import React from 'react'
import LogoHome from '../../assets/home-image.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './style'

function Home() {
  return (
    <Container>
      <HomeImg src={LogoHome} alt='logo-home' />
      <CategoryCarousel />
    </Container>
  )
}

export default Home