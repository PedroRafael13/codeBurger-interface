import React, { useEffect, useState } from 'react'

import Category from '../../assets/category-logo-image.svg'
import { Container, CategoryImg, ContainerItens, CategoryImage, CategoryButton } from './style'
import Carousel from 'react-elastic-carousel'
import api from '../../services/api'

export function CategoryCarousel() {
  const [categories, setcategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setcategories(data)
    }

    loadCategories()
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
          categories && categories.map(category => (
            <ContainerItens key={category.id} >
              <CategoryImage>{category.url}</CategoryImage>
              <CategoryButton>{category.name}</CategoryButton>
            </ContainerItens>
          ))
        }
      </Carousel>
    </Container>
  )
}
