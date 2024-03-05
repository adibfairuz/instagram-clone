import React from 'react'

const Messages = () => {
  return (
    <div>
      <h3 className="font-medium mx-4 mt-6">Messages</h3>
      <div className="flex flex-col items-center justify-center px-12 mt-12">
        <div className="text-center text-lg	 font-medium">Message Friends</div>
        <p className="text-center my-4 text-gray-500">Send private messages or share your favorite posts directly with friends.</p>
        <button className="text-blue-500 font-bold">Send a message</button>
      </div>
    </div>
  )
}

export default Messages