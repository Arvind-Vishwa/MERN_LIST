import { useState } from 'react';
import { createContext } from 'react';


export const contextValue=createContext();

const ContextData=(props)=>{

    const[log,setLog]=useState(
        JSON.parse(localStorage.getItem('isloggedin'))==="true"
    );

    const isAdmin=[{
        email:"arvind@gmail.com",
        password:"admin"
    }];
    const login=()=>{
        setLog(true);
        localStorage.setItem(JSON.stringify('isloggedin'),"true");
    }

    const logout=()=>{
        setLog(false);
        localStorage.removeItem('isloggedin');
    }
    
    return(
        <contextValue.Provider value={{log,login,logout,isAdmin}} >
            {props.children}
        </contextValue.Provider>
            
        
    )
}
export default ContextData;