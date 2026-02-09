import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { dataContext } from './ContextAPI/ContextData';
const Register = () => {
    const {log,setLog}=useContext(dataContext);
    const navigate=useNavigate();

    const[input1,setInput1]=useState("");
    const[input2,setInput2]=useState("");

    const[data,setData]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let item={
            email:input1,
            password:input2
        }
        setData(prev=>[...prev,item]);
        navigate('/');
    }
    useEffect(()=>{
        let newData=JSON.stringify(data);
        localStorage.setItem('log',newData);
    },[data])
  return (
    
      <div style={{display:"flex",marginTop:"40px",justifyContent:"center"}}>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={input1}
        placeholder='Enter the email'
        style={{display:"block",padding:"10px",margin:"5px"}}
        onChange={(e)=>{
            setInput1(e.target.value);
        }}
        />
        <input
        style={{display:"block",padding:"10px",margin:"5px"}}
        type='text'
        value={input2}
        onChange={(e)=>{
            setInput2(e.target.value)
        }}
        placeholder='Enter the Password'
        
        />
        <button 
        style={{display:"block",padding:"10px",margin:"5px"}}
        >Submit</button>
      </form>
    </div>
  )
}

export default Register
