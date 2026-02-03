import React, { useState } from 'react'
import { createContext } from 'react'

export const contextD=createContext();
const ContextData = (props) => {

    const[log,setLog]=useState(
        JSON.parse(localStorage.getItem('isloggedin'))==="true"
    );

    const login=()=>{
        setLog(true);
        localStorage.setItem(JSON.stringify('isloggedin'),"true");
    }
    const logout=()=>{
        setLog(false);
        localStorage.removeItem('isloggedin');
    }
  return (
    <div>
    <contextD.Provider value={{log ,login,logout}}>
        {props.children}
    </contextD.Provider>
    </div>
  )
}

export default ContextData
