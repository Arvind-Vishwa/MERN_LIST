import React from 'react'
import CardBasic from './CardBasic'
import cardData from '../data/CardData'
const Card = () => {
  return (
    <div className='d-flex gap-4 flex-wrap'>
      {
        cardData.map(function(el){
            return <CardBasic id={el.id} title={el.title} 
            offer={el.offer} img={el.image}/>
        })
      }
    </div>
  )
}

export default Card
