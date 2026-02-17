import React from 'react'
import NavBar from './Pages/NavBar.jsx'
import {Route,Routes} from 'react-router-dom'
import Login from './Credential/Login.jsx'
import Register from './Credential/Register.jsx'
import Cart from './component/Cart.jsx'
import HomePage from './Pages/HomePage.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import Product from './Pages/Product.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route  path='/productDetail/:userId' element={<ProductDetail/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App
