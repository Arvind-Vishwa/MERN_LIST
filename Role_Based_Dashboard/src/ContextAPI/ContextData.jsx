
import { useState,useReducer,useEffect } from 'react';
import { createContext } from 'react';


export const contextValue=createContext();

const initialCart=JSON.parse(localStorage.getItem('cart'))||[];

function cartReducer(state,action){
    switch(action.type){
        case "Add_To_Cart":
            const item=action.payload;

            const itemExist=state.find(i=>i.id === item.id);
            if(itemExist){
                return state.map(i=>
                i.id === item.id
                ?
                {...i,qty:i.qty+1}
                    : i
                );
            }
            return [...state,{...item,qty:1}]
        case "Incre_Qty":
            return state.map(
                item=>item.id == action.payload
                ?
                {...item,qty:item.qty+1}
                :
                item
            );
        case "Decre_Qty":
            return state.map(
                item=>item.id == action.payload
                ?
                {...item,qty:item.qty-1}:item
            )
            .filter(item=>item.qty > 0);
            
        case "Remove_Item":
            return state.filter(item=>item.id !== action.payload);
        case "Clear_Cart":
            return [];
        default:
            return state;

    }
}

const ContextData=(props)=>{

    const[log,setLog]=useState(
        JSON.parse(localStorage.getItem('isloggedin'))==="true"
    );

    // cart reducer
    const[cart,dispatch]=useReducer(cartReducer,initialCart);

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);


    const isAdmin=[{
        email:"arvind@gmail.com",
        password:"admin"
    }];

    const login=()=>{
        setLog(true);
        localStorage.setItem('isloggedin',"true");
    }

    const logout=()=>{
        setLog(false);
        localStorage.removeItem('isloggedin');
        dispatch({type:"Clear_Cart"})
    }

    const addTocart=(val)=>{
        dispatch({type:"Add_To_Cart",payload:val})
    }
    const removeItemCart=(id)=>{
        dispatch({type:"Remove_Item",payload:id});
    }
    const incrQty=(id)=>{
        dispatch({type:"Incre_Qty",payload:id});
    }
    const decrQty=(id)=>{
        dispatch({type:"Decre_Qty",payload:id})
    }
    const totalPrice=
        cart.reduce((total,item)=>total+item.price * item.qty,0);
    
    
    return(
        <contextValue.Provider value={{log,login,logout,isAdmin,cart,addTocart,removeItemCart,
            incrQty,decrQty,totalPrice
        }} >
            {props.children}
        </contextValue.Provider>
            
        
    )
}
export default ContextData;