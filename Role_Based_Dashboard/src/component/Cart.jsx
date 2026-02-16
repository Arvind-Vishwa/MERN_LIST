import React from 'react'
import { contextValue } from '../ContextAPI/ContextData'
import { useContext } from 'react'
import CartItem from './CartItem';
const Cart = () => {

    const {cart,totalPrice}=useContext(contextValue);
    if(cart.length == 0){
      return <h1>Your cart is empty</h1>
  }
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {
        cart.map(function(c,idx){
            return <div key={idx} >
              <CartItem title={c.title} desc={c.desc} img={c.img}
            price={c.price} id={c.id} qty={c.qty}
            />
            </div>
        })
    }
    
    <h1 style={{display:"flex",textAlign:"center"}}>TotalPrice : {totalPrice}</h1>
    </div>
  )
}

export default Cart
