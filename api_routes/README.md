# Protected Route
## *Uses local storage as database*
## *Perform login and register*
## flow
1. Through Register saving the data in localStorage
2. In login checking the data of User is same as in local storage 
3. Providing the Protected route without login user cannot access the Product page
4. Used a useEffect and useState of Hooks for proper function
5. Added a Login and Logout *where the user can logged see the product*
6. Uses **useContext** to share the data among all the component
7. uses a **useNavigate** to navigate the page after the login directly to product

## Protected Route
    <Route path='/product' element=
        {
            <ProtectedRoute>
            <Product />
            </ProtectedRoute>
            
        }/>

    ** ProctectedRoute.jsx**

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
