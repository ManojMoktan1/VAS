import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const AuthRoute = () => {
    const isLoggedIn = useSelector((state:any) => state.auth.isUserLoggedIn )
  return (
    !isLoggedIn ?  <Outlet /> : <Navigate to= '/' />
  )
  
}

export default AuthRoute;