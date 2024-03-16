import React, { useEffect, useState } from 'react'

import Category from '../../assets/category-logo-image.svg'
import { Container, CategoryImg, ContainerItens, CategoryImage, CategoryButton } from './style'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

export function CategoryCarousel() {
  const [category, setcategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setcategories(data)
    }

    loadCategory()
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
      <CategoryImg src={Category} alt='logo-home' />
      <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints} >
        {
          category && category.map(category => (
            <ContainerItens key={category.id} >
              <CategoryImage src={category.url} alt="capa-das-categorias" />
              <CategoryButton>{category.name}</CategoryButton>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
