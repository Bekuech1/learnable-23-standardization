import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bandage-main'>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/home' element = {<Home />} />
      <Route path = '/shop' element = {<Shop/>} />
      <Route path = '/shoppingcart' element = {<Cart/>} />
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
