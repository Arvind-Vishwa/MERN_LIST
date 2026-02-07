
import { data } from '../data'
import NavBar from './Home/Navbar'
import CardEx from './Home/Card'
import Footer from './Home/Footer'

const HomeCard = () => {
  return (
    <div>
      <NavBar/>
      <div style={{display:"flex",flexWrap:'wrap', gap:"20px",justifyContent:"space-around", padding:"10px"}}>
      {data.map(function(dt,idx){
        return <div key={idx} >
            <CardEx title={dt.title} description={dt.description}
            image={dt.image_url} price={dt.price} id={dt.id}/>
        </div>
      })}
      </div>
      
      <Footer />
    </div>
  )
}

export default HomeCard
