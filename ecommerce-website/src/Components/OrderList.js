import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import setOrders from '../Redux/actions/orderAction'
import AllOrders from './AllOrders'

function OrderList() {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.allOrders.orders)

  {
    /*Avoid using useEffect */
  }
  const fetchOrders = async () => {
    const response = await axios.get('http://localhost:3000/order.json').catch((err) => {
      console.log('Err: ', err)
    })
    dispatch(setOrders(response.data))
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  console.log('Orders : ', orders)

  return (
    <div className="container">
      <AllOrders />
    </div>
  )
}

export default OrderList
