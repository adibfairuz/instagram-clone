import React from 'react'

const Page = ({ children }) => {
  return (
    <div className="bg-gray-200">
        <div className="flex bg-gray-100 flex-col m-auto max-w-[500px] min-h-screen relative">
            { children }
        </div>
    </div>
  )
}

export default Page