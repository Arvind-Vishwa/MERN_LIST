import React, { useEffect, useState } from 'react'


const Register = () => {


  const[input1,setInput1]=useState('');
  const[input2,setInput2]=useState('');

  const[userData,setUserData]=useState([]);
  let log=JSON.parse(localStorage.getItem('log') || []);

  const handleSubmit=(e)=>{
    e.preventDefault();

    let newUser={
      email:input1,
      password:input2
    }
    let userExist=log.find(u=>{
      if(u.email == input1 && u.password == input2){
        return true;
      }else{
        return false;
      }
    })
    if(!userExist){
      setUserData(prev=>[...prev,newUser]);
      alert(`welcome bro`);
    }else{
      alert('User exists');
    }
    
  }
  useEffect(()=>{
    let data=JSON.stringify(userData);
    localStorage.setItem('log',data);
    console.log(userData);
  },[userData])
  return (
    <form onSubmit={handleSubmit}>
      <input
      type='email'
      placeholder='Enter Email'
      value={input1}
      onChange={(e)=>{setInput1(e.target.value)}}
      />
      <input
      type='password'
      placeholder='Enter password'
      value={input2}
      onChange={(e)=>{setInput2(e.target.value)}}
      />
      <button>Submit</button>
    </form>

  )
}

export default Register
