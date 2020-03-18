import React from 'react'
import { Link } from 'react-router-dom'
import Store from '../store/Store'

import Header from '../components/Header'
import LongCard from '../components/LongCard'

function CheckoutPage() {
  return (
    <div>
      <Header hasBackButton={ true } backUrl="/" cart={ Store.cart } />
      <h2 className="text-center mt-10 text-2xl">
        <b>Checkout Product List</b>
      </h2>
      <div className="w-1/2 flex flex-wrap justify-center mx-auto my-0">
        <LongCard />
      </div>
      <div className="flex justify-between items-center flex-wrap w-1/2 mx-auto my-0 h-10">
        <Link to="/" className="bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg cursor-pointer outline-none focus:outline-none border border-teal-500 h-full p-3 flex items-center">
          <span className="text-md font-semibold">Buy Now</span>
        </Link>
        <p>
          <b>Total Qty: 100</b>
        </p>
      </div>
    </div>
  )
}

export default CheckoutPage
