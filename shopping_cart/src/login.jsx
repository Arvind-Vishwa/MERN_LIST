import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from './ContextAPI/ContextData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
const Login = () => {
    const[input1,setInput1]=useState('');
    const [input2,setInput2]=useState('');
    const navigate=useNavigate();

    const {login}=useContext(dataContext);

    const handleSubmit=(e)=>{
        e.preventDefault();

        let data=JSON.parse(localStorage.getItem('log'));

        let userExist=data.find(u=>{
            if(u.email == input1 && u.password==input2){
                return true;
            }else{
                return false;
            }
        });

        if(userExist){
            login();
            navigate('/');
            alert("welcome back!");
        }else{
            alert("login failed!");
        }
    }
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
      <Link to='/register'>Not Register Yet?</Link>
    </div>
  )
}

export default Login
