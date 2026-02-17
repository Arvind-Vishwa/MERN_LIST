import React from 'react'
import {Navigate} from 'react'
const ProtectedRoute = (props) => {
    
  return (
    <div>
      {props.child}
    </div>
  )
}

export default ProtectedRoute
