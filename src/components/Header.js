import React from 'react'
import { Link } from 'react-router-dom'
import MdPricetags from 'react-ionicons/lib/MdPricetags'
import IosCart from 'react-ionicons/lib/IosCart'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack'

const LeftMenu = ({ hasBackButton, backUrl }) => {
  if (hasBackButton) {
    return (
      <Link to={ backUrl } className="flex items-center flex-shrink-0 text-white mr-6">
        <MdArrowRoundBack color="#FFF" className="mr-3" />
        <span className="font-semibold text-xl tracking-tight">Back</span>
      </Link>
    )
  } else {
    return (
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <MdPricetags color="#FFF" className="mr-3" />
        <span className="font-semibold text-xl tracking-tight">Simple Shop</span>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <nav className="flex justify-center bg-teal-500 p-6">
      <div className="w-3/4 flex flex-wrap justify-between items-center">
        <LeftMenu { ...props } />
        <Link to="/checkout">
          <div className="absolute -mt-3 ml-4 px-3 py-1 bg-red-500 rounded-full text-sm text-white">
            { props.cart.length }
          </div>
          <IosCart color="#FFF" fontSize="2em" />
        </Link>
      </div>
    </nav>
  )
}

export default Header
