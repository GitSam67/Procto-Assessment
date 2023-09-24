import React from 'react'

export default function footer() {
  return (
    <>
    <div className='bottom-0 pt-10 py-5 flex flex-col bg-black text-white'>

      <div className='font-bold text-xl flex items-center jutify-center mx-auto mb-10'>
          <a href="/"><p className='text-center'><span className='text-orange-500'>A</span>ma<span className='text-orange-500'>z</span>on.<span className='text-orange-500'>in</span></p>
          </a>
      </div>

      <div className='w-2/3 flex items-center mx-auto'>

        <div className='flex flex-col justify-center items-center mx-14 hover:underline'>
          <p className='text-sm'>Amazon Web Services</p>
          <p className='text-gray-400 text-sm'>Scalable Cloud</p>
          <p className='text-gray-400 text-sm'>Computing services</p>
          <br />
          <p className='text-sm'>Amazon Business</p>
          <p className='text-gray-400 text-sm'>Everything for</p>
          <p className='text-gray-400 text-sm'>Your Business services</p>
        </div>

        <div className='flex flex-col justify-center items-center mx-14 hover:underline'>
          <p className='text-sm'>Audible</p>
          <p className='text-gray-400 text-sm'>Download</p>
          <p className='text-gray-400 text-sm'>AudioBooks</p>
          <br />
          <p className='text-sm'>Prime Now</p>
          <p className='text-gray-400 text-sm'>2-hour delivery</p>
          <p className='text-gray-400 text-sm'>on Everyday Items</p>
        </div>

        <div className='flex flex-col justify-center items-center mx-14 hover:underline'>
          <p className='text-sm'>AbeBooks</p>
          <p className='text-gray-400 text-sm'>Books, arts</p>
          <p className='text-gray-400 text-sm'>& collectibles</p>
          <br />
          <p className='text-sm'>ShopBop</p>
          <p className='text-gray-400 text-sm'>Designer</p>
          <p className='text-gray-400 text-sm'>Fashion Brands</p>
        </div>

        <div className='flex flex-col justify-center items-center mx-14 hover:underline'>
          <p className='text-sm'>Amazon Prime Music</p>
          <p className='text-gray-400 text-sm'>100 million songs, ad-free</p>
          <p className='text-gray-400 text-sm'>over 15 million podcast</p>
          <br />
          <p className='text-sm'>IMDb</p>
          <p className='text-gray-400 text-sm'>Movies, TV</p>
          <p className='text-gray-400 text-sm'>& Celebrities</p>
        </div>

      </div>

      <div className='py-10 flex flex-col bg-black justify-center items-center  text-sm text-white mt-10'>
        <div>
          <span className='mr-4'>Conditions of Use & Sale</span>
          <span className='mr-4'>Privacy Notice</span>
          <span className='mr-4'>Interest-Based Ads</span>
        </div>
        <div>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
      </div>
      </div>
    </>
  )
}
