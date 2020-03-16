import React from 'react'

function Card() {
  return (
    <div className="sm:w-full md:w-3/4 flex flex-wrap justify-center md:justify-start mx-auto my-0">

			<div className="md:w-1/2 lg:w-1/3 py-4 px-4" >
        <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
          <div className="absolute mt-4 rounded-r-full text-center font-bold text-xs text-white px-2 py-1 bg-orange-500">
            0 Ditambahkan
          </div>
          <div className="h-32 rounded-lg w-full bg-gray-300 flex items-center justify-center text-gray-600">
            No Image Available
          </div>
          <div className="py-2 px-2">
            <div className=" font-bold font-title text-center">Nama Barang</div>
          </div>
          <div class="custom-number-input h-10 w-full">
            <div class="flex flex-row h-10 w-full rounded-lg justify-between">
              <button class="bg-transparent hover:bg-red-500 text-red-500 hover:text-white h-full px-3 rounded-lg cursor-pointer outline-none focus:outline-none mr-2 border border-red-500">
                <span class="text-md font-semibold">−</span>
              </button>
              <a href="#" className="bg-transparent hover:bg-blue-400 text-blue-400 hover:text-white h-full rounded-lg cursor-pointer outline-none focus:outline-none border border-blue-400 px-3 flex justify-center items-center">
                <span class="text-md font-semibold">CHECKOUT</span>
              </a>
              <button class="bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white h-full px-3 rounded-lg cursor-pointer outline-none focus:outline-none ml-2 border border-teal-500">
                <span class="text-md font-semibold">+</span>
              </button>
            </div>
          </div>
        </div>
			</div>

		</div>
  )
}

export default Card
