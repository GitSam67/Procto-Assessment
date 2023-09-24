import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function SideModal() {

  const Navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(()=>{
    const res = localStorage.getItem("user");
    if(res) {
        const data = JSON.parse(res);
        setName(data.name);
    }
    else {
        setName("User");
    }
  });
  

  return (
    <>
      <div className='side z-60 absolute w-80 h-screen overflow-y-auto pb-3 bg-white text-black rounded-sm text-left'>
        <div className='relative text-lg pl-5 rounded-sm font-sans font-bold mb-1 py-3 bg-[#0F2A36] text-white'>
            <NavLink to="/">Hello <span className='font-medium text-lg mx-1'>{name}</span>,</NavLink>
            <i className='absolute top-3 right-5 fa fa-close text-lg'></i>
        </div>
        <div className='text-lg px-2 rounded-sm font-sans font-bold my-1 py-2 text-left ml-2'>
            Trending
            <NavLink to="/Trending">
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Best Sellers</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>New Releases</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Movies and Shakers</p>
            </NavLink>
        </div>
        <hr />
        <div className='text-lg px-2 rounded-sm font-sans font-bold my-1 py-2 text-left ml-2'>
            Shop By Category
            <NavLink to="/Category">
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Mobile, Computers</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>TV, Appliance, Electronics</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Men's Fashion</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Women's Fashion</p>
            </NavLink>
        </div>
        <hr />
        <div className='text-lg px-2 rounded-sm font-sans font-bold my-1 py-2 text-left ml-2'>
            Program & Features
            <NavLink to="/Features">
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Gift Cards & Mobile Recharges</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Amazon launchpad</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Buy more, Save more</p>
            </NavLink>
        </div>
        <hr />
        <div className='text-lg px-2 rounded-sm font-sans font-bold my-1 py-2 text-left ml-2'>
            Help & Settings
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Your Account</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'>Customer Service</p>
            <p className='font-medium text-md my-2 py-1 hover:bg-gray-200'><a href="/SignUp">Sign in</a></p>
        </div>
      </div>
    </>
  )
}

export default SideModal;