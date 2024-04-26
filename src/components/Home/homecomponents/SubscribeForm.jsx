import React from 'react'

function SubscribeForm() {
  return (
    <div className="bg-black h-[203px] w-full flex justify-center items-center">
      <div className='flex items-center border-solid'>
        <input  className= " border border-[#373E4D] bg-transparent  h-[48px] rounded-none placeholder:text-[#373E4D] placeholder: px-3  " placeholder="Email" />
        <button className="h-[48px] w-28 bg-white text-black ">Subscribe</button>
      </div>
    </div>
  )
}

export default SubscribeForm