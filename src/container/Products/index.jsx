import React from 'react'
import { Container, ProductImg, CategoryButton, ContainerMenu } from './style'
import LogoImage from '../../assets/home-image.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'

function Products() {
  const [category, setcategories] = useState([])
  const [activerCategory, setActiverCategory] = useState([0])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setcategories(newCategories)
    }

    loadCategory()
  }, [])


  return (
    <Container>
      <ProductImg src={LogoImage} alt="logo da home" />
      <ContainerMenu>
        {category && category.map(categories => (
          <CategoryButton type='text' isActiveCategory={activerCategory === categories.id} key={categories.id} onClick={() => { setActiverCategory(categories.id) }} >{categories.name}</CategoryButton>
        ))}
      </ContainerMenu>
    </Container>
  )
}

export default Products