import React,{ useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SideModal from './SideModal';
import NotifyModal from "./NotifyModal";
import Dropdown from './Dropdown';
import Tooltip from "@mui/material/Tooltip";

export default function header() {

    const dropRef = useRef();
    const sideRef = useRef();
    const [drop, setDrop] = useState(false);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [userData, setUserData] = useState({});
    const [loginState, setLoginState] = useState(false);
    const notifyRef = useRef();
    const [notifyModal, setNotifyModal] = useState(false);

    const products = [
      {
        name: "Amazon miniTv",
        link: "https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav"
      },
      {
        name: "Sell",
        link: "https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"
      },
      {
        name: "Best Sellers",
        link: "https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers"
      },
      {
        name: "Mobiles",
        link: "https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"
      },
      {
        name: "Electronics",
        link: "https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"
      },
      {
        name: "Fashion",
        link: "https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion"
      },
      {
        name: "Jewellery",
        link: "https://www.amazon.in/b/?_encoding=UTF8&node=5210079031&pd_rd_w=fQris&content-id=amzn1.sym.4b451034-71bf-4b55-ab57-7a72fe262a8f&pf_rd_p=4b451034-71bf-4b55-ab57-7a72fe262a8f&pf_rd_r=BRSDRJGYE9P11TZW216H&pd_rd_wg=LV5cq&pd_rd_r=bda0efe8-be50-4d20-b90c-25e206d1f401&ref_=pd_gw_unk"
      },
      {
        name: "Games",
        link: "https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"
      },
      {
        name: "Sports",
        link: "https://www.amazon.in/s?i=shoes&bbn=1983519031&rh=n%3A1983519031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_n_pct-off-with-tax%3A2665401031&dc&ds=v1%3AE9Y23lVqkOsWgmzj52NHtqBaad%2B%2FCIpXcQsEmA5TemQ&_encoding=UTF8&content-id=amzn1.sym.4b451034-71bf-4b55-ab57-7a72fe262a8f&pd_rd_r=bda0efe8-be50-4d20-b90c-25e206d1f401&pd_rd_w=fQris&pd_rd_wg=LV5cq&pf_rd_p=4b451034-71bf-4b55-ab57-7a72fe262a8f&pf_rd_r=BRSDRJGYE9P11TZW216H&qid=1673623083&rnid=2665398031&ref=pd_gw_unk"
      },
      {
        name: "Home & Kitchen",
        link: "https://www.amazon.in/s?bbn=81107433031&rh=n%3A81107433031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.1c82c58f-ba94-4c7f-addd-8abb3f123860&pd_rd_r=13671fa6-0d46-40ba-bd1a-1f481359e118&pd_rd_w=1bwqb&pd_rd_wg=HFRBq&pf_rd_p=1c82c58f-ba94-4c7f-addd-8abb3f123860&pf_rd_r=BRSDRJGYE9P11TZW216H&ref=pd_gw_unk"
      },
      {
        name: "Popular",
        link: "https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases"
      }
    ]

    useEffect(()=>{
      const res = localStorage.getItem('user');
      if(res) {
        const data = JSON.parse(res);
        console.log(data.email);
        setUserData(data);
        setLoginState(true);
      }
    });
    

  useEffect(() => {
    const closeNotify = (e) => {
      if (!notifyRef.current.contains(e.target)) setNotifyModal(false);
    };

    document.addEventListener("mousedown", closeNotify);

    return () => document.removeEventListener("mousedown", closeNotify);
  });

  
  useEffect(() => {
    const closeSide = (e) => {
      if (!sideRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", closeSide);

    return () => document.removeEventListener("mousedown", closeSide);
  });
  
  useEffect(() => {

    const close = (e) => {
      if (!dropRef.current.contains(e.target)) setDrop(false);
    };

    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  });

  return (
    <>
    <div className="sticky top-0 left-0 relative z-20 w-full">
        <header className="bg-black shadow-xl" id="navbar">
          <nav className="md:flex items-center justify-between py-[5px] md:pl-0 pl-5 md:px-1 ml-5 mr-4">
            <div className="w-1/4 font-bold text-2xl cursor-pointer flex text-left items-center mr-8">
              <div className='w-1/2 flex mr-14'>
                <a className="flex flex-row no-underline items-center" href="/">
                  <img className='rounded-lg rounded-lg w-10 h-6 mr-1' src="../assets/logo.jpg" alt="logo" />
                  <span className="text-white mb-1 text-md">Amazon.in</span>
                </a>
              </div>
              
                <div className='w-1/2 flex items-center text-white'>
                    <i class="fa-solid fa-location-dot mr-2 text-sm"></i>
                    <span className='text-sm'>Select your address</span> 
                </div>
            </div>


            <div className="w-1/2 font-bold text-lg cursor-pointer flex text-left items-center">
              <div className="relative w-5/6">
                <i
                  class="fa fa-search absolute text-xl rounded-r-md top-[0px] right-0 text-black bg-yellow-400 px-4 py-1 hover:bg-yellow-500"
                  aria-hidden="true"
                ></i>
                <input
                  className="bg-white h-9 w-full rounded-md text-black pl-3 font-medium"
                  placeholder="Search"
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />
              </div>
            </div>

              <Tooltip
                className="transition delay-40 ease-in duration-400 text-black"
                title={!notifyModal ? "Notifications" : ""}
                placement="left"
                arrow
              >
                <div
                  onClick={() => setNotifyModal(!notifyModal)}
                  ref={notifyRef}
                  className="mr-3 cursor-pointer"
                >
                  {!notifyModal ? (
                    <div className="relative">
                      <i class="fa-regular fa-bell text-white text-2xl"></i>
                      <h2 className="absolute fixed top-0 left-4 text-sm text-white bg-red-500 px-1 rounded-full">
                        3
                      </h2>
                    </div>
                  ) : (
                    <i class="fa-solid fa-bell fa-bounce text-white text-2xl"></i>
                  )}

                  {notifyModal && <NotifyModal />}
                </div>
              </Tooltip> 

              <div
                id="create"
                className=" w-1/4 flex w-fit h-fit px-2 pb-2 items-center justify-center text-center rounded-lg">

                <NavLink to="/Cart">
                  <Tooltip
                    className="text-black mr-16"
                    title="Add to Cart"
                    arrow
                  >
                    <i className="fa-solid fa-cart-shopping text-2xl text-white mt-2 hover:text-yellow-400"></i>
                  </Tooltip>
                </NavLink>
                
              <div className="flex flex-row mt-1">
              {loginState ?
                <div className="w-fit h-fit flex flex-row items-center justify-end">
                  <div onClick={() => setDrop(!drop)} ref={dropRef} className="flex flex-row items-center text-white justify-center mr-2 cursor-pointer">
                    <div className="font-medium text-lg border-b-2 border-gray-100 mx-1">{userData.name}</div>
                    <i className="fa fa-caret-down"></i>
                  </div>
                    {drop && <Dropdown />}
                </div>
                :
                <div className="bg-green-500 rounded-lg p-2 px-3 mt-1 font-medium text-white cursor-pointer hover:bg-green-600">
                  <a href="/SignUp" className={`transition delay-40 text-md border-b-2 border-transparent duration-200`}>
                    Sign Up
                  </a>
                </div>
              }
            </div> 
            </div>
          </nav>
        </header>
        <div className='w-full flex items-center justify-start text-md py-2 font-medium bg-[#0F2A36] text-white px-3'>
            <div
              onClick={() => setOpen(!open)}
              ref={sideRef}
              className="md:text-xl text-md flex items-center pl-2 rounded-md border-2 border-transparent cursor-pointer hover:border-white"
            >
              {open && <SideModal/>}
            <i className="fa-solid fa-bars text-white md:text-md text-sm"></i>
            <p className='title-font md:text-md text-sm font-bold mx-2 mr-5'>All</p>
            </div>
              {products.map((item)=>(
                <div key={item.id}>
                    <div className='mx-4 md:text-md text-sm cursor-pointer hover:underline'>
                        <h3><a href={item.link}>{item.name}</a></h3>
                    </div>
                </div>
              ))}
              <div className='absolute right-5 flex items-center text-white bg-blue-600 px-3 md:text-lg text-sm rounded-r-xl cursor-pointer hover:bg-blue-500'>
                <a href="https://shorturl.at/kuv45"> Join Prime Now </a>
              </div>
        </div>
      </div>    
      </>
  )
}
