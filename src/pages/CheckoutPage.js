import React from 'react'
import Store from '../store/Store'

import Header from '../components/Header'

function CheckoutPage() {
  return (
    <div>
      <Header hasBackButton={ true } backUrl="/" cart={ Store.cart } />
      
    </div>
  )
}

export default CheckoutPage
