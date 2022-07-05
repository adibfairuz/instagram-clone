import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import routes from '../../routes'

const BottomTabs = () => {
  const { pathname } = useLocation()
  return (
    <div className="fixed bottom-0 left-0 w-full z-10">
      <div className="flex justify-around max-w-[500px] mx-auto border-t bg-white border-t-gray-200">
        {
          routes.map(({ path, icon, label }) => {
            if (path) {
              return (
                <Link key={label} to={path} className={`${ pathname === path ? 'text-blue-600' : '' } flex items-center justify-center w-full rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600`}>
                    <FontAwesomeIcon icon={icon} size="xl" />
                </Link>
              )
            } else {
              return (
                <div key={label} className={`flex items-center justify-center w-full rounded-md px-2 py-3 cursor-pointer`}>
                    <FontAwesomeIcon icon={icon} size="xl" />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default BottomTabs