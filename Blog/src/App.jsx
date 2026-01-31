import React from 'react'
import NavBar from './component/Navbar'
import CardRender from './component/CardRender'
import { Route,Routes } from 'react-router-dom'
import ProductDetail from './component/ProductDetail'

const App = () => {
  return (
    <div>
      
    <NavBar />
    <Routes>
      <Route path='/' element={<CardRender />}/>
      <Route path='/product' element={<CardRender/>} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
    </div>
  )
}

export default App
