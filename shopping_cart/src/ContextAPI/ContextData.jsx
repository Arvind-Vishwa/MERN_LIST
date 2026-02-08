import React, { useEffect, useState } from 'react'
import {createContext} from 'react'
import {data} from '../data'
export const dataContext=createContext();
const ContextData = (props) => {

  const[cart,setCart]=useState(()=>{
    const stored=localStorage.getItem('cart');
    return stored ? JSON.parse(stored):[]
  });

  const addToCart=(product)=>{
    
    setCart(prev=>{
      const existing=prev.find(item => item.id === product.id);

      if(existing){
        return prev.map(item=>
          item.id === product.id ?
          {...item,qty:item.qty+1} : item
        )
      }
      return [...prev,{...product,qty:1}];
    })
  }

  const removeItem=(id)=>{
    setCart(prev=>prev.filter(item=>item.id !== id))
  }

  const incrQty=(id)=>{
    setCart(prev=>
      prev.map(item=>
        item.id===id ? {...item,qty:item.qty+1}:item
      )
    )
  }
  const decrQty=(id)=>{
    setCart(prev =>
      prev.map(item =>
        item.id === id ? {...item,qty:item.qty-1}:item
    )
    .filter(item => item.qty >0 )
  )
  }

  const totalPrice=cart.reduce((sum , item)=> sum+item.qty * item.price,0);
  
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])


  return (
    <div>
      <dataContext.Provider value=
      {{
        cart,
        addToCart,
        removeItem,
        incrQty,
        decrQty,
        totalPrice
        }}>
      {props.children}
      </dataContext.Provider>
    </div>
  )
}

export default ContextData
