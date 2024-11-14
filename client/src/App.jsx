import React from 'react'
import { Route, Routes } from 'react-router'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Layout from './components/auth/Layout'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header component</h1>

      <Routes>
        <Route path='/auth' element={<Layout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
