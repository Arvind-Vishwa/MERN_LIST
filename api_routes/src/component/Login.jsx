import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Login() {
    // localStorage.clear();
    const[input1,setInput1]=useState("");
    const[input2,setInput2] =useState("");

    const[userData,setUserData]=useState(()=>{
        return JSON.parse(localStorage.getItem('log')) || [];
    });
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newItem={
            email:input1,
            password:input2
        }
        setUserData(prev=>[...prev,newItem]);
        setInput1('');
        setInput2('');
        
        
    }
    useEffect(()=>{
        let data=JSON.stringify(userData);
        if(data.length > 0)
        localStorage.setItem('log',data);
    },[userData]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Let's reconnect</Card.Subtitle>
        <form onSubmit={handleSubmit}>
        <input
        placeholder='Enter email'
        type='text'
        value={input1}
        onChange={(e)=>{setInput1(e.target.value)}}
        />
        <input
        placeholder='Enter password'
        type='password'
        value={input2}
        onChange={(e)=>{setInput2(e.target.value)}}
        />
        <br/>
        <button>login</button>
        </form>
        <Card.Link href="/register">Not register yet ?</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Login;