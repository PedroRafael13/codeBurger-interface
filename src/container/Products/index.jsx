import React from 'react'
import { Container, ProductImg, CategoryButton, ContainerMenu, ContainerProduct } from './style'
import LogoImage from '../../assets/home-image.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import formartCurrency from '../../utils/formantCurrency'
import api from '../../services/api'
import { CardProduct } from '../../components'

function Products() {
  const [category, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filtreProduct, setFiltreProduct] = useState([])
  const [activerCategory, setActiverCategory] = useState([0])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 1, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProduct() {
      const { data: allProduct } = await api.get('products')

      const newProduct = allProduct.map(product => {
        return { ...product, formatdPrice: formartCurrency(product.price) }
      })

      setProducts(newProduct)
    }

    loadProduct()
    loadCategory()
  }, [])

  useEffect(() => {

    if (activerCategory === 0) {
      setFiltreProduct(products)
    } else {
      const newFiltreProduct = products.filter((product) => product.category_id === activerCategory)
      setFiltreProduct(newFiltreProduct)
    }
  }, [activerCategory, products])

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
        {filtreProduct && filtreProduct.map(products => (
          <CardProduct key={products.id} />
        ))}
      </ContainerProduct>
    </Container>
  )
}

export default Products