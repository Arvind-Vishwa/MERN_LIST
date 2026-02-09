import {Routes,Route} from 'react-router-dom'
import HomeCard from './component/HomeCard'
import Cart from './component/Home/Cart'
import Login from './Login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
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
      </Routes>
      
    </div>
  )
}

export default App
