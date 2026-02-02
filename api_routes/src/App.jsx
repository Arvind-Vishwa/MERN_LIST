import React from 'react'
import NavBar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        
        <Route path='register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
