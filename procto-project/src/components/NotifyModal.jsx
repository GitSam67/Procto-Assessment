import React from 'react'
import "./Notify.css";

function NotifyModal() {

  return (
    <>
      <div className='notify z-60 absolute w-96 h-96 px-3 bg-[#0B222C] flex-col justify-center rounded-lg overflow-y-auto text-left text-white'>
        <div className='py-2 border-b-2 border-gray-100 text-gray-100 text-left px-1 text-xl mb-4 mt-2 font-semibold'>Notifications</div>
        <div className='mb-5'>
        <span className='font-bold'>Get Biggest Deals on products:</span> Enjoy upto 50% discount on premium products this weekend..!
        </div>

        <div className='mb-5'>
        <span className='font-bold'>Prime Membership: </span> 
          Introducing "Purchase Utsav" program exlcusive for prime members! If you need assistance with grocery shopping, errands, or any other purcahses.
        </div>
        
        <div className='mb-2'>
        <span className='font-bold'>DropServiving: </span> Calling all talented youngsters! Showcase your Skills and Marketing experience & stand a chance to work with us. 
        </div>
      </div>
    </>
  )
}

export default NotifyModal