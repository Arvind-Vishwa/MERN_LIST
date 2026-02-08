import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { dataContext } from '../../ContextAPI/ContextData';
const CartItem = (props) => {
  const {incrQty,decrQty}=useContext(dataContext);
  console.log(props.id.title)
  return (
    <div>
      
      <div style={{display:"flex"}}>
                  <Button variant='success'
                  onClick={()=>{incrQty(props.id.id)}}
                  >+</Button>
                  <Button >Item :{props.id.qty}</Button>
                  <Button variant='danger'
                  onClick={()=>{decrQty(props.id.id)}}
                  >-</Button>
                  </div>
    </div>
  )
}

export default CartItem

