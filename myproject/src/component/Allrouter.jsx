import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './home'
// import 
import Gifts from './gifts'
import Market from './market'
import Pricing from './pricing'
import Singlepage from './singlepage'
import Login from './Login'
import Signup from './signup'
import Wine from './wine'
import Onthemenu from './on-the-menu'
import Privaterout from './Privaterout'


export const Allrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            
              <Login />
           
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/wine"
          element={
            <Privaterout>
              <Wine />
            </Privaterout>
          }
        ></Route>
        <Route
          path="/market"
          element={
            <Privaterout>
              <Market />
            </Privaterout>
          }
        ></Route>
        <Route
          path="/gifts"
          element={
            <Privaterout>
              <Gifts />
            </Privaterout>
          }
        ></Route>
        <Route
          path="/on-the-menu"
          element={
            <Privaterout>
              <Onthemenu />
            </Privaterout>
          }
        ></Route>
        <Route
          path="/pricing"
          element={
            <Privaterout>
              <Pricing />
            </Privaterout>
          }
        ></Route>
        <Route path="/on-the-menu/:id" element={<Singlepage />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
