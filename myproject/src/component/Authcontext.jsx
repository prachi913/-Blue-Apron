import React, { useState } from 'react'
import { createContext } from 'react'


export let Authcontext=createContext()

const Authcontextprivider = ({ children }) => {
    let [authsta, setauth] = useState({
        isAuth: true,
        token:null
    })
    
    let Signup = (token) => {
        setauth({isAuth:false,token:token})
    }
    let Login = (token) => {
      setauth({ isAuth:false, token: token });
    };
  return (
      <div>
          <Authcontext.Provider value={{authsta,Login,Signup}}>
              {children}
          </Authcontext.Provider>
      </div>
  )
}
export default Authcontextprivider