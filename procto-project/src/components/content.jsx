import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tooltip from '@mui/material/Tooltip';
import { products } from '../data';

export default function content() {

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-1 m-10 px-3 place-items-center">
        {products.map((item) => {
          return (
            <div className="relative md:w-96 w-80 h-fit rounded-lg pb-5 pt-2 mb-5 text-left px-10 text-black bg-white shadow-2xl" key={item._id}>
              <div className="w-fit mb-5 md:px-2 px-1">
                <p className="md:text-xl text-lg font-bold"><span className="border-b-2 border-gray-300 rounded-lg"> {item.tag} </span></p>
              </div>
              <div className="w-full flex flex-row items-center mt-5 object-cover">
                <img className="my-2 w-full h-64" src={item.image_url} alt="product" />
              </div>
              <div className='mx-auto flex flex-col justify-center items-center my-3'>
                <div className='mb-2'>
                  <p className="w-fit my-2 md:text-xl text-lg font-bold mr-5">Starting from <span className="md:text-xl text-lg font-sans text-red-500"> {item.price} $</span></p>
                </div>
                <div className=''>
                  <a href={item.link}>
                    <button className='bg-green-400 px-3 rounded-lg p-2 title-font text-lg hover:bg-green-500'>Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-1 my-10 mx-5 px-1 place-items-center">

        <div className="relative md:w-80 w-64 h-full rounded-lg pb-5 pt-2 mb-5 text-left px-10 text-black bg-white shadow-2xl">
          <div className="w-full mb-5 md:px-2 px-1">
            <p className="md:text-xl text-lg font-bold"><span className="border-b-2 border-gray-300 rounded-lg"> Avail Lightning Deals </span></p>
          </div>
          <div className='flex items-center'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/phone2.jpg" alt="product" />
              <p className='text-sm'>Deals on smartphones</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/phone.jpg" alt="product" />
              <p className='text-sm'>Deals on smartphones</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/earbuds.jpg" alt="product" />
              <p className='text-sm'>Deals on earbuds</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/watch.jpg" alt="product" />
              <p className='text-sm'>Deals on headphones</p>
            </div>
          </div>
          <div className='mx-auto flex flex-col justify-center items-center my-3'>
            <a href="/" className='w-full text-left'>
              <button className='text-blue-600 rounded-lg p-2 underline text-md hover:text-blue-700'>See all offers</button>
            </a>
          </div>
        </div>
        
        <div className="relative md:w-80 w-64 h-full rounded-lg pb-5 pt-2 mb-5 text-left px-10 text-black bg-white shadow-2xl">
          <div className="w-full mb-5 md:px-2 px-1">
            <p className="md:text-xl text-lg font-bold"><span className="border-b-2 border-gray-300 rounded-lg"> Revamp your home in style </span></p>
          </div>
          <div className='flex items-center mb-5'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/bedsheets.jpg" alt="product" />
              <p className='text-sm'>Bedsheets & more</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/decor.jpg" alt="product" />
              <p className='text-sm'>Home decoration</p>
            </div>
          </div>
          <div className='flex items-center mb-5'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/store.jpg" alt="product" />
              <p className='text-sm'>Home storage</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/light.jpg" alt="product" />
              <p className='text-sm'>Lighting solutions</p>
            </div>
          </div>
          <div className='mx-auto flex flex-col justify-center items-center my-3'>
            <a href="/" className='w-full text-left'>
              <button className='text-blue-600 rounded-lg p-2 underline text-md hover:text-blue-700'>See all offers</button>
            </a>
          </div>
        </div>

        <div className="relative md:w-80 w-64 h-full rounded-lg pb-5 pt-2 mb-5 text-left px-10 text-black bg-white shadow-2xl">
          <div className="w-full mb-6 md:px-2 px-1">
            <p className="md:text-xl text-lg font-bold"><span className="border-b-2 border-gray-300 rounded-lg"> Kitchen products </span></p>
          </div>
          <div className='flex items-center mb-5'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/kitchen1.jpg" alt="product" />
              <p className='text-sm'>Kitchen tools</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/kitchen2.jpg" alt="product" />
              <p className='text-sm'>Kitchen racks & holders</p>
            </div>
          </div>
          <div className='flex items-center mb-7'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/kitchen3.jpg" alt="product" />
              <p className='text-sm'>Oven gloves & more</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/kitchen4.jpg" alt="product" />
              <p className='text-sm'>Steamers & idli makers</p>
            </div>
          </div>
          <div className='mx-auto flex flex-col justify-center items-center my-3'>
            <a href="/" className='w-full text-left'>
              <button className='text-blue-600 rounded-lg p-2 underline text-md hover:text-blue-700'>See all offers</button>
            </a>
          </div>
        </div>

        <div className="relative md:w-80 w-64 h-full rounded-lg pb-5 pt-2 mb-5 text-left px-10 text-black bg-white shadow-2xl">
          <div className="w-full mb-7 md:px-2 px-1">
            <p className="md:text-xl text-lg font-bold"><span className="border-b-2 border-gray-300 rounded-lg"> Accessories on for grab </span></p>
          </div>
          <div className='flex items-center mb-5'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/access1.jpg" alt="product" />
              <p className='text-sm'>Gaming Accessories</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/access2.jpg" alt="product" />
              <p className='text-sm'>Stands, cables & more</p>
            </div>
          </div>
          <div className='flex items-center mb-10'>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/access3.jpg" alt="product" />
              <p className='text-sm'>Backpacks</p>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col items-center m-2 object-cover">
              <img className="my-2 w-full h-full" src="../assets/access4.jpg" alt="product" />
              <p className='text-sm'>Storage accessories</p>
            </div>
          </div>
          <div className='mx-auto flex flex-col justify-center items-center my-3'>
            <a href="/" className='w-full text-left'>
              <button className='text-blue-600 rounded-lg p-2 underline text-md hover:text-blue-700'>See all offers</button>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
