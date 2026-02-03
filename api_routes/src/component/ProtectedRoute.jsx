import React, { useContext } from 'react'
import { contextD } from './ContextData'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = (props) => {

    let {log} =useContext(contextD);
    if(!log){
        return <Navigate to='/login' />
      }
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ProtectedRoute
