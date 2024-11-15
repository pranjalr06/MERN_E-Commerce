import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Layout from './components/auth/Layout'
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

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      

      <Routes>

        <Route path='/auth' element={<Layout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route  path='dashboard' element={<AdminDashboard/>}/>
          <Route  path='products' element={<AdminProducts/>}/>
          <Route  path='orders' element={<AdminOrders/>}/>
          <Route  path='features' element={<AdminFeatures/>}/>
        </Route>

        <Route path ='/shop' element={<ShoppingLayout/>}>
          <Route path ='home' element={<ShoppingHome/>} />
          <Route path ='listing' element={<ShoppingListing/>} />
          <Route path ='checkout' element={<ShoppingCheckout/>} />
          <Route path ='account' element={<ShoppingAccount/>} />
        </Route>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
      
    </div>
  )
}

export default App
