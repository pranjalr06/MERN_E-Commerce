// this will component will check all the authentication related things 

import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function CheckAuth({isAuthenticated, user, children}) {

    const location = useLocation(); //this will tell you the corrent location where u r right now (i.e the path in the url)

    //if the user is not authenticated or logged in then this code will execute
    // if (
    //     !isAuthenticated &&
    //     !(
    //       location.pathname.includes("/login") ||
    //       location.pathname.includes("/register")
    //     )
    //   ) {
    //     return <Navigate to="/auth/login" />;
    //   }

    if( ! isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register')))
    {
        return <Navigate to='/auth/login' />
    }
    //-------------------------------------------------------------------------

    // if the user is authenticated & tried to access the login or register page, 
    //  based on the user role they will navigate to admin page or the home page
    // if (
    //     isAuthenticated &&
    //     (location.pathname.includes("/login") ||
    //       location.pathname.includes("/register"))
    //   ) {
    //     if (user?.role === "admin") {
    //       return <Navigate to="/admin/dashboard" />;
    //     } else {
    //       return <Navigate to="/shop/home" />;
    //     }
    //   }

    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register')))
    {
        if(user ?. role === 'admin'){
            return <Navigate to='/admin/dashboard' />
        }else{
            return <Navigate to='/shop/home' />
        }
    }
  //-------------------------------------------------------------------------
  
  // if the user is already authenticated & the user role is not admin and if the tried to acces the admin page 
  //  then they will navigate to unauth page
  // if (
    //     isAuthenticated &&
    //     user?.role !== "admin" &&
    //     location.pathname.includes("admin")
    //   ) {
      //     return <Navigate to="/unauth-page" />;
      //   }
      
      if(isAuthenticated & user?.role !== 'admin' && location.pathname.includes('/admin')){
        return <Navigate to='/unauth-page' />
      }
      //-------------------------------------------------------------------------
      
      
      // if the user is authenticated and the user role is admin & they tried to acces the shopping page
      // then they will navigate to admin dashboard.
      // if (
      //   isAuthenticated &&
      //   user?.role === "admin" &&
      //   location.pathname.includes("shop")
      //   ) {
      //     return <Navigate to="/admin/dashboard" />;
      //   }

      if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')){
        return <Navigate to='/admin/dashboard' />
    }

        //-------------------------------------------------------------------------

    return <>{children}</>

} 
















// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);

//   if (location.pathname === "/") {
//     if (!isAuthenticated) {
//       return <Navigate to="/auth/login" />;
//     } else {
//       if (user?.role === "admin") {
//         return <Navigate to="/admin/dashboard" />;
//       } else {
//         return <Navigate to="/shop/home" />;
//       }
//     }
  

  

// import { Navigate, useLocation } from "react-router-dom"

// function CheckAuth({isAuthenticated, user, children}) {

//     const location = useLocation()
//     if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register')))
//     {
//         return <Navigate to='/auth/login' />
//     }

//     if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register')))
//     {
//         if(user ?. role === 'admin'){
//             return <Navigate to='/admin/dashboard' />
//         }else{
//             return <Navigate to='/shop/home' />
//         }
//     }

//     if(isAuthenticated & user?.role !== 'admin' && location.pathname.includes('/admin')){
//         return <Navigate to='/unauth-page' />
//     }

//     if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')){
//         return <Navigate to='/admin/dashboard' />
//     }

//     return <>{children}</>

//     return(
//         <>
//         </>
//     )
// }

// export default CheckAuth
  

  
