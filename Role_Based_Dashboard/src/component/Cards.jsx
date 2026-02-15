import React from 'react'
import {data} from '../data.js'
import CardEx from './CardEx.jsx'
const Cards = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {
        data.map(function(d,id){
            return <div key={id}>
                <CardEx title={d.title} desc={d.description}
                price={d.price} img={d.image_url} id={d.id}
                />
            </div>
        })
      }
    </div>
  )
}

export default Cards
