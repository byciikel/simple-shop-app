import React from 'react'

const LongCard = ({ itemName, product, cart }) => {
  return (
    <div className="w-full lg:flex shadow rounded-lg border border-gray-400 my-4">
      <div className="w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div className="flex flex-row lg:justify-start justify-center">
          <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            Product Name :
          </div>
        </div>
        {product[itemName][0].id.toString() === itemName ?
          <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            { product[itemName][0].title }
          </div>
        :
          <div />
        }
      </div>
      <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
        {product[itemName][0].id.toString() === itemName ?
          <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
            Qty: { cart[itemName] }
          </span>
        :
          <div />
        }
      </div>
    </div>
  )
}

export default LongCard
