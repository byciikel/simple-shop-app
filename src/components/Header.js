import React from 'react'
import MdPricetags from 'react-ionicons/lib/MdPricetags'
import IosCart from 'react-ionicons/lib/IosCart'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack'

function LeftMenu({ hasBackButton, backUrl }) {
  if (hasBackButton) {
    return (
      <a href={"#/" + backUrl} className="flex items-center flex-shrink-0 text-white mr-6">
        <MdArrowRoundBack color="#FFF" className="mr-3" />
        <span className="font-semibold text-xl tracking-tight">Back</span>
      </a>
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

function Header(props) {
  return (
    <nav className="flex justify-center bg-teal-500 p-6">
      <div className="w-3/4 flex flex-wrap justify-between items-center">
        <LeftMenu { ...props } />
        <div>
          <div className="absolute -mt-3 ml-4 px-3 py-1 bg-red-500 rounded-full text-sm text-white">0</div>
          <IosCart color="#FFF" fontSize="2em" />
        </div>
      </div>
    </nav>
  )
}

export default Header
