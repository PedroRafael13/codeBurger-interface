import React from 'react'
import { Container, ProductButton, ProductImg, ProductMenu } from './style'
import LogoImage from '../../assets/home-image.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function Products() {
  const [category, setcategories] = useState([])
  const [isActiveCategory, setisActiveCategories] = useState([0])

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
      <ProductImg src={LogoImage} alt='Logo-produtos' />
      <ProductMenu>
        {category && category.map((category) => {
          <ProductButton type='button' key={category.id} onClick={() => { setisActivecategories }} >{category.name}</ProductButton>
        })}
      </ProductMenu>
    </Container>
  )
}

export default Products