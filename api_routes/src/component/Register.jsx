import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Register() {
    // localStorage.clear();
    const[input1,setInput1]=useState("");
    const[input2,setInput2] =useState("");

    const[userData,setUserData]=useState([]);
    
    const handleSubmit=(e)=>{
        
        let newItem={
            email:input1,
            password:input2
        }
        setUserData(prev=>[...prev,newItem]);
        setInput1('');
        setInput2('');
        alert('Welcome')
        
        
    }
    useEffect(()=>{
        let data=JSON.stringify(userData);
        if(data.length > 0)
        localStorage.setItem('log',data);
    },[userData]);

  return (
    
    <Card style={{ width: '18rem', border:"10px", padding:"20px", backgroundColor:"gray"}}>
      <Card.Body style={{margin:"10px", alignSelf:"center"}}>
        <Card.Title style={{color:"black"}}>Register</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Let's connect</Card.Subtitle>
        <form onSubmit={handleSubmit} action='/'>
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
        <button variant='outline' style={{backgroundColor:"white", margin:"10px" ,padding:"7px"}}>Register</button>
        </form>
        
      </Card.Body>
    </Card>
    
  );
}

export default Register;