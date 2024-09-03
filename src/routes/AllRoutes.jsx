import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {HomePage,ProductList} from '../pages'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/productlist' element={<ProductList/>}/>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
    </div>
  )
}

export default AllRoutes