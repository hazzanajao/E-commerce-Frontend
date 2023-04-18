import React from 'react'
import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

function ProductSlider() {
  return (
    <>
      <Slide>
        <div
          className="each-slide-effect"
          style={{
            display: 'flex',
            width: '100%',
            position: 'relative'
          }}>
          <br></br>
          <br></br>

          <div
            className="saas"
            style={{
              fontFamily: 'Segoe UI',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'white',
              padding: '4%',
              position: 'absolute',
              textShadow: '0px 0px 2px gray',
              backgroundColor: '#F0A04B',
              marginTop: '6%',
              borderTop: '8px solid #181823'
            }}>
            <em>Promo prices ! Shop now 40% off</em>
          </div>

          <img src={img2} alt="promo-productA" className="product-a" />
          <img src={img3} alt="promo-productB" className="product-b" />
          <img src={img2} alt="promo-productA" className="product-a" />
          <img src={img3} alt="promo-productB" className="product-b" />
        </div>
        <div
          className="each-slide-effect"
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width: '100%'
          }}>
          <img src={img3} alt="promo-productB" className="product-b" />
          <img src={img2} alt="promo-productA" className="product-a" />
        </div>
      </Slide>
    </>
  )
}

export default ProductSlider
