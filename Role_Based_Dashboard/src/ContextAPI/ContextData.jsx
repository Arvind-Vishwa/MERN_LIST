import { useState } from 'react';
import { createContext } from 'react-router-dom';
import {useContext} from 'react-router-dom';

export const contextValue=createContext();

const ContextData=(props)=>{
    const[log,setLog]=useState(()=>{
        return JSON.parse(localStorage.getItem('isloggedin'))==="true"
    });
    
    const login=()=>{
        setLog(true);
        localStorage.setItem(JSON.stringify('isloggedin'),"true");
    }

    const logout=()=>{
        setLog(false);
        localStorage.removeItem('isloggedin');
    }
    return(
        <contextValue.Provider value={{log,login,logout}} >
            {props.children}
        </contextValue.Provider>
            
        
    )
}
export default ContextData;