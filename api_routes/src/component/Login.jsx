import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { contextD } from './ContextData';
import { useNavigate } from 'react-router-dom';

function Login() {
  let {login}=useContext(contextD);
    // localStorage.clear();
    let navigate=useNavigate();
    const[input1,setInput1]=useState("");
    const[input2,setInput2] =useState("");
    
    
    // const[userData,setUserData]=useState(()=>{
    //     return JSON.parse(localStorage.getItem('log')) || [];
    // });
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        // let newItem={
        //     email:input1,
        //     password:input2
        // }

        let savedData=JSON.parse(localStorage.getItem('log'));

        let userExist=savedData.find(u=>{
            if(u.email == input1 && u.password == input2){
                return true;
            }
            return false;
        })

        if(userExist){
            alert("login sucess");
            login();
            navigate('/product');

        }
        else{
            alert('login failed');
            
        }
        // setUserData(prev=>[...prev,newItem]);
        setInput1('');
        setInput2('');
        
        
    
    

    }
    // useEffect(()=>{
    //     let data=JSON.stringify(userData);
    //     if(data.length > 0)
    //     localStorage.setItem('log',data);
    // },[userData]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Let's reconnect</Card.Subtitle>
        <form onSubmit={handleSubmit} action='/' method='get'>
        <input
        placeholder='Enter email'
        type='text'
        value={input1}
        style={{margin:"10px" ,padding:"7px"}}
        onChange={(e)=>{setInput1(e.target.value)}}
        />
        <input
        placeholder='Enter password'
        type='password'
        value={input2}
        style={{margin:"10px" ,padding:"7px"}}
        onChange={(e)=>{setInput2(e.target.value)}}
        />
        <br/>
        <button type='submit' style={{margin:"10px" ,padding:"7px"}}>login</button>
        </form>
        <Card.Link href="/register">Not register yet ?</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Login;