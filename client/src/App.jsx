import React from 'react'
import { Route, Routes } from 'react-router'
import AuthLayout from './components/auth/Layout'
import AuthLogin from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/product'
import AdminOrders from './pages/admin-view/orders'
import AdminFeatures from './pages/admin-view/features'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingAccount from './pages/shopping-view/account'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'


const App = () => {

  const isAuthenticated = false;
  const user = null;

  return (
    <div className='flex flex-col overflow-hidden bg-white'>

      <Routes>

        {/* <Route path="/" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}></CheckAuth> } /> */}

        {/* <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>   <-- main layout  */}

          <Route path='/auth' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
               <AuthLayout />
            </CheckAuth>
          }>
            <Route path='login' element={<AuthLogin />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='/admin' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='products' element={<AdminProducts />} />
            <Route path='orders' element={<AdminOrders />} />
            <Route path='features' element={<AdminFeatures />} />
          </Route>

          <Route path='/shop' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }>
            <Route path='home' element={<ShoppingHome />} />
            <Route path='listing' element={<ShoppingListing />} />
            <Route path='checkout' element={<ShoppingCheckout />} />
            <Route path='account' element={<ShoppingAccount />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path='/unauth-page' element={<UnauthPage/>} />
      </Routes>

    </div>
  )
}

export default App


