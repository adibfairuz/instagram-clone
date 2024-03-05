import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faChevronDown, faSquarePlus, faBars, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="max-w-[500px] mx-auto bg-white flex justify-between items-center border-b border-b-gray-300 px-4 py-2">
        <div className="flex items-center">
          <FontAwesomeIcon onClick={handleBack} className="text-black text-base mr-6 text-xl" icon={faArrowLeft} />
          <div className="font-semibold text-lg mr-2">adbfz</div>
          <FontAwesomeIcon className="text-black text-base" icon={faChevronDown} />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="text-black text-2xl" icon={faPenToSquare} />
        </div>
      </div>
    </div>
  )
}

export default Header