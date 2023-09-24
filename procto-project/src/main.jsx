import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Trending from './components/Trending.jsx'
import Category from './components/Category.jsx'
import Features from './components/Features.jsx'
import Cart from './components/Cart.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Trending" element={<Trending/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Features" element={<Features/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  </>
)
