import React from 'react'
import { Container, ProductImg, CategoryButton, CategoriesMenu } from './style'
import LogoImage from '../../assets/home-image.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function Products() {
  const [category, setcategories] = useState([])

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
      <CategoriesMenu>
        {category &&
          category.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
    </Container>
  )
}

export default Products