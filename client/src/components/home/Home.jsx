import React, { useEffect, useContext } from 'react'
import './Home.scss'

import Banner from './banner/Banner'
import Category from './category/Category'
import Products from '../products/Products'
import { fetchDataFromApi } from '../../utils/api'
import { Context } from '../../utils/context'

const Home = () => {

  const { categories, setCategories, products, setProducts } = useContext(Context)

  useEffect(()=> {
    getProducts()
    getCategories()
  }, [])

  const getProducts = ()=>{
    fetchDataFromApi("/api/products?populate=*").then(res => setProducts(res))
  }

  const getCategories = ()=>{
    fetchDataFromApi("/api/categories?populate=*").then(res => setCategories(res))
  }

  return (
    <div className='home'>
      <Banner />
      <div className="main-content">
        <div className="layout">
        <Category categories={categories} />
        <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  )
}

export default Home