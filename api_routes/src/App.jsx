import React from 'react'
import NavBar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
