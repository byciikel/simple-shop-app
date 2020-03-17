import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import InfiniteScroll from "react-infinite-scroll-component"

import Store from '../store/Store'

import Header from '../components/Header'
import Card from '../components/Card'

function HomePage() {
  const [countProduct, setCountProduct] = useState(1)
  const [productList, setProductLIst] = useState([])
  const [isMore, tootgleMore] = useState(true)

  useEffect(() => {
    setProductLIst(Store.products[0])
  }, [Store.products])

  const fetchMoreData = () => {
    if (Store.products[countProduct]) {
      let nextProduct = productList.concat(Store.products[countProduct])
      setProductLIst(nextProduct)
      setCountProduct(countProduct + 1)
    } else {
      tootgleMore(false)
    }
  }

  return (
    <div>
      <Header hasBackButton={false} />
      {productList ? 
        <InfiniteScroll
          dataLength={productList.length}
          next={fetchMoreData}
          hasMore={isMore}
          loader={
            <p className="text-center m-10">
              <b>Loading...</b>
            </p>
          }
          endMessage={
            <p className="text-center m-10">
              <b>All product has showed!</b>
            </p>
          }
        >
          <div className="sm:w-full md:w-3/4 flex flex-wrap justify-center md:justify-start mx-auto my-0">
            {productList.map((product, index) => (
              <Card key={ index } product={ product } />
            ))}
          </div>
        </InfiniteScroll>
      :
        <div/>
      }
    </div>
  )
}

export default observer(HomePage)
