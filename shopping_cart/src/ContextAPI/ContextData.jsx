import React, { useEffect, useState } from 'react'
import {createContext} from 'react'
import {data} from '../data'
export const dataContext=createContext();
const ContextData = (props) => {

  const[cartN,setCartN]=useState(
    ()=>{
      return JSON.parse(localStorage.getItem('cart')) || 0;
    }
  )


  return (
    <div>
      <dataContext.Provider value={{cartN,setCartN}}>
      {props.children}
      </dataContext.Provider>
    </div>
  )
}

export default ContextData
