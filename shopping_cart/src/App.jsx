import {Routes,Route} from 'react-router-dom'
import HomeCard from './component/HomeCard'
import Cart from './component/Home/Cart'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeCard />}/>
        <Route path='/product' element={<HomeCard/>}/>
        <Route path='/cartitem' element={<Cart />}/>
        
      </Routes>
      
    </div>
  )
}

export default App
