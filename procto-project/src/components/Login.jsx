import React, { useState, useEffect } from "react";
import Modal from "./LoginModal";
import {NavLink, useNavigate} from "react-router-dom";

export default function Login() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const Login = async (e) => {
        e.preventDefault();

        try {
            setSpinner(true);

            const res = localStorage.getItem('user');
            const data = JSON.parse(res);
            console.log(data.email);
            if (data.email === email && data.password === password) {
                console.log(data.email, "  ", email);
                setOpenModal(true);
                setEmail("");
                setPassword("");
            }
            else {
                setSpinner(false);
                alert("Invalid Credentials..!! Try again with correct one");
            }
        }
        catch(err) {
            console.log(err);
        }

    };

    return (
    <>
        { openModal && <Modal closeModal={setOpenModal} closeSpinner={setSpinner} Navigate={Navigate}/> }


        <section id="login" className="bg-gray-100 h-screen">
            <div className='md:flex items-center justify-start py-4 md:px-10 px-7 w-full top-0 left-0 font-bold text-2xl cursor-pointer font-[Poppins]'>
                <NavLink className="flex flex-row items-center" to="/">
                    <img src="../assets/logo.jpg" className="mainlogo md:h-8 md:w-12 h-7 h-7 rounded-full mx-2" alt="logo" />
                    <span className="text-black md:text-2xl text-3xl font-sans mb-2">amazon.in</span>
                </NavLink>
            </div>
            <div className="container bg-white w-2/3 mt-7 shadow-2xl rounded-lg px-5 py-5 py-1 my-2 mx-auto flex flex-col items-center justify-center">
                
                <div className="text-center mb-4">
                    <h1 className="md:text-4xl text-3xl font-medium title-font text-orange-500">
                        Log In
                    </h1>
                </div>
                <div className="rounded-lg flex flex-row w-5/6 pb-10 pt-5">
                    
                    <div className="md:w-1/2 sm:w-full md:flex hidden items-center justify-center object-cover rounded-lg pb-3 object-cover">
                        <img className="rounded-lg shadow-xl" src="/assets/earbuds.jpg" alt="login" />
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col md:py-8 mt-8 md:mt-0 md:px-5 md:mx-5 md:ml-20 justify-center">
                        <form onSubmit={Login} className="w-full" method="POST">
                            <div className="relative mb-5">
                                <i class="fas fa-md fa-envelope absolute mt-3 md:ml-3 text-orange-500" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full border-b-2 items-center pl-10 border-gray-700 focus:border-b-orange-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            
                            <div className="relative mb-7">
                                <i class="fa-solid fa-key absolute mt-3 md:ml-3 text-orange-500" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    minLength={8}
                                    required
                                    className="w-full border-b-2 items-center pl-10 border-gray-700 focus:border-b-orange-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            
                        { !spinner ? 
                            <button
                                type="submit"
                                className="w-28 h-10 text-white font-semibold flex items-center justify-center bg-green-600 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-green-700 rounded text-xl">
                                Log In
                            </button>
                            : <div className="w-28 h-10 text-white flex items-center justify-center bg-green-500 border-0 py-2 px-6 mt-5 focus:outline-none rounded text-xl">
                                <div className="spinner rounded-full w-6 h-6 bg-transparent border-t-2 border-white font-bold"></div>
                            </div>
                        }
                            <p className="text-md mt-7 mb-5">Don't have an account? <span className="underline text-orange-500 cursor-pointer hover:text-orange-600"><a href="/SignUp"> Sign Up </a></span></p>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        </>
    );
}

