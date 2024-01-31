import React, { useEffect } from 'react'

import Category from '../../assets/category-logo-image.svg'
import { Container, CategoryImg } from './style'
import api from '../../services/api'

function CategoryCarousel() {

  useEffect(() => {
    async function loadCategory() {
      const response = await api.get('categories')
    }

    loadCategory()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt='logo-home' />
    </Container>
  )
}

export default CategoryCarousel