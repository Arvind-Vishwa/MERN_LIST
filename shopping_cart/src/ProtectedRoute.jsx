import React, { useContext, useEffect } from 'react'
import { dataContext } from './ContextAPI/ContextData'
import { Navigate } from 'react-router-dom';




const ProtectedRoute = (props) => {
    

const {log}=useContext(dataContext);

if(!log){
    return <Navigate to='/login'  />
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ProtectedRoute
