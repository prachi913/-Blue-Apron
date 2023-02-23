import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './home'
// import 
import Gifts from './gifts'
import Market from './market'
import Pricing from './pricing'
// import Singlepage from './singlepage'
import Login from './Login'
import Signup from './signup'
import Wine from './wine'
import Onthemenu from './on-the-menu'
export const Allrouter = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/> }></Route>
              <Route path='/signup' element={<Signup/> }></Route>
              <Route path='/wine' element={<Wine/> }></Route>
              <Route path='/market' element={ <Market/>}></Route>
              <Route path='/gift' element={<Gifts/> }></Route>
              <Route path='/on-the-menu' element={<Onthemenu/>}></Route>
               <Route path='/pricing' element={<Pricing/>}></Route>
          </Routes>
          
      </div>
  )
}
