import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { setIsUserLoggedIn } from '../reducers/authReducer';
import './NavBar.css'

const NavBar = () => {
    const isLoggedIn = useSelector((state:any) => state.auth.isUserLoggedIn )

    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(setIsUserLoggedIn(false));      
        
    }
    return (
        <Fragment>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
              VAS
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/appointment'>
                Appointment
              </Link>
              <Link className='nav-link' to='/client-register'>
                Patient Register
              </Link>
              <Link className='nav-link' to='/create-vaccination'>
                Create Vaccine
              </Link>
              <Link className='nav-link' to='/create-patient'>
                Create Patient
              </Link>
                {isLoggedIn ? (<Link className='nav-link' to='/login' onClick={logout}>
                Logout
              </Link>) : <Link className='nav-link' to='/'>
                Login
              </Link> }

            </div>
          </div>
          <Outlet />
        </Fragment>
      );
}

export default NavBar