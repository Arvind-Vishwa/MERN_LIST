import {Routes,Route} from 'react-router-dom'
import HomeCard from './component/HomeCard'
import Cart from './component/Home/Cart'
import Login from './login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import Register from './Register.jsx'
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element=
        {
          
            <HomeCard />
         
        }/>
        <Route path='/product' element={<HomeCard/>}/>
        <Route path='/cartitem' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
          }/>
        <Route path='/login' element=
        {
        <Login />
        }/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      
    </div>
  )
}

export default App
