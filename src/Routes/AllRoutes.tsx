import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Meals from '../components/Meals/Meals'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes