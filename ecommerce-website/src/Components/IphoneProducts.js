import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { addToCart } from '../Features/cartSlice'
import { setIphones } from '../Redux/actions/iphoneActions'

const { useSelector } = require('react-redux')

function IphoneProducts() {
  const iPhones = useSelector((state) => state.iPhoneProducts.iPhones)
  const dispatch = useDispatch()

  {
    /* 2: New concept for fetching data */
  }
  fetch('http://localhost:3000/iPhones.json')
    .then((resp) => resp.json())
    .then((data) => dispatch(setIphones(data)))

  console.log('Iphones : ', iPhones)

  const handleAddIphoneToCart = (iPhone) => {
    dispatch(addToCart(iPhone))
    iPhones.push('/cart')
  }
  return (
    <div className="admin-panel">
      <div className="home-container">
        <br />
        <div className="grid grid-cols-4 gap-4">
          {iPhones &&
            iPhones?.map((iPhone) => (
              <div key={iPhone.sizes} className="iPhone">
                <h3>{iPhone.name}</h3>
                <div className="phone-price">
                  <h5>{iPhone.category}</h5>
                  <h6 className="price">${iPhone.price}</h6>
                </div>
                <img src={iPhone.image} alt={iPhone.name} />
                <br />
                <div className="details">
                  <span>{iPhone.description}</span>
                </div>
                <br />
                <div className="variant-size">
                  <h4>{iPhone.variants}</h4>
                  <h4>{iPhone.sizes}</h4>
                </div>
                <a href="/cart">
                  <Button onClick={() => handleAddIphoneToCart(iPhone)}>Add To Cart</Button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default IphoneProducts
