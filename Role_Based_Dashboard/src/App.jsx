import React from 'react'
import NavBar from './Pages/NavBar.jsx'
import {Route,Routes} from 'react-router-dom'
import Login from './Credential/Login.jsx'
import Register from './Credential/Register.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
