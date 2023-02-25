import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from './Authcontext'

const Privaterout = ({ children }) => {
    const { authsta } = useContext(Authcontext)
    if (authsta.isAuth) {
        return <Navigate to="/sign-up"/>
    }
    if (authsta.isAuth) {
      return <Navigate to="/login" />;
    }
    return children
 
}
export default Privaterout