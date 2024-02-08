import React from 'react'
import { Container, ProductImg, CategoryButton, ContainerMenu, ContainerProduct } from './style'
import LogoImage from '../../assets/home-image.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'
import CardProduct from '../../components/CardProduct'

function Products() {
  const [category, setCategories] = useState([])
  const [product, setProduct] = useState([])
  const [activerCategory, setActiverCategory] = useState([0])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProduct() {
      const { data } = await api.get('products')

      setProduct(data)
    }

    loadProduct()
    loadCategory()
  }, [])


  return (
    <Container>
      <ProductImg src={LogoImage} alt="logo da home" />
      <ContainerMenu>
        {category && category.map(categories => (
          <CategoryButton type='text' isActiveCategory={activerCategory === categories.id}
            key={categories.id}
            onClick={() => { setActiverCategory(categories.id) }}>{categories.name}</CategoryButton>
        ))}
      </ContainerMenu>
      <ContainerProduct>
        {product && product.map(products => (
          <CardProduct key={products.id} />
        ))}
      </ContainerProduct>
    </Container>
  )
}

export default Products