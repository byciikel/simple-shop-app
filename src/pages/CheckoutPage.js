import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import Store from '../store/Store'

import Header from '../components/Header'
import LongCard from '../components/LongCard'

const CheckOrder = () => {
  const sumItem = _.countBy(Store.cart, 'id')
  const groupByItem = _.groupBy(Store.cart, 'id')
  const itemName = Object.getOwnPropertyNames(sumItem)

  const onBuyProduct = () => {
    Store.setCart('reset', [])
  }

  if (Store.cart.length !== 0) {
    return (
      <div>
        <h2 className="text-center mt-10 mb-6 text-2xl">
          <b>Checkout Product List</b>
        </h2>
        <div className="w-1/2 flex flex-wrap justify-center mx-auto my-0">
          {itemName.map((item, index) => (
            <LongCard
              key={ index }
              itemName={ item }
              product={ groupByItem }
              cart={ sumItem }
            />
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap w-1/2 mx-auto my-10 h-10">
          <Link
            to="/"
            onClick={onBuyProduct}
            className="bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg cursor-pointer outline-none focus:outline-none border border-teal-500 h-full p-3 flex items-center">
            <span className="text-md font-semibold">Buy Now</span>
          </Link>
          <p>
            <b>Total Qty: { Store.cart.length }</b>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2 className="text-center mt-10 text-2xl">
          <b>No Product Added!</b>
        </h2>
      </div>
    )
  }
}

const CheckoutPage = () => {
  return (
    <div>
      <Header hasBackButton={ true } backUrl="/" cart={ Store.cart } />
      <CheckOrder />
    </div>
  )
}

export default observer(CheckoutPage)
