import React from 'react';

const Page = (props) => {
    return (
      <div className="mt-[48px] mb-[49px] bg-white min-h-screen">
          {props.children}
      </div>
    )
  }
  
  export default Page