import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="w-full z-10">
      <div className="max-w-[500px] mx-auto bg-gray-50 flex justify-center items-center px-4 py-3">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative z-50 w-full">
          <button className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600" size="sm" />
          </button>
          <input type="text" className="block w-full text-sm pl-10 pr-3 py-1 border border-gray-300 rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar