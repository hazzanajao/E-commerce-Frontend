import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card } from '@mui/material'
import { addToCart } from '../Features/cartSlice'
import { ProductTable } from './ProductTable'
import { setProducts } from '../Redux/actions/productActions'
import axios from 'axios'

const { useSelector } = require('react-redux')

function AllProducts() {
  const products = useSelector((state) => state.allProducts.products)

  const dispatch = useDispatch()

  {
    /* Using useEffect to fetch Api data */
  }
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3000/products.json').catch((err) => {
      console.log('Err: ', err)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log('Products : ', products)

  {
    /* 2: New concept for fetching data
  fetch('http://localhost:3000/products.json')
    .then((resp) => resp.json())
    .then((data) => dispatch(setProducts(data)))
 */
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    products.push('/cart')
  }

  return (
    <div className="admin-panel">
      <div className="home-container">
        <div className="grid grid-cols-4 gap-4">
          {products &&
            products?.map((product) => (
              <div key={product.sizes} className="product">
                <h3>{product.name}</h3>
                <div className="phone-price">
                  <h5>{product.category}</h5>
                  <h6 className="price">${product.price}</h6>
                </div>
                <img src={product.image} alt={product.name} />
                <br />
                <div className="details">
                  <span>{product.description}</span>
                </div>
                <h4>{product.variants}</h4>
                <h4>{product.sizes}</h4>
                <a href="/cart">
                  <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
