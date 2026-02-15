import React, { useContext, useState } from 'react';
import { UserRound, LockKeyhole } from 'lucide-react';
import { contextValue } from '../ContextAPI/ContextData';
import { useNavigate,Link } from 'react-router-dom';

let Login = () => {
  let {login,isAdmin}=useContext(contextValue);
  console.log(isAdmin);
  
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  let navigate=useNavigate();

  

  const handleSubmit=(e)=>{
    e.preventDefault();

      let savedData=JSON.parse(localStorage.getItem('log'));

      let checkAdmin=isAdmin.find(u=>{
        if(u.email === input1  && u.password === input2){
          return true;
        }else{
          return false;
        }
      });
      let userData=savedData.find(u=>{
        if(u.email == input1 && u.password == input2){
          return true;
        }else{
          return false;
        }
        
      })
      if(checkAdmin){
        alert('welcome Admin');
        navigate('/');
        login();
        return;
      }
      if(userData){
        alert("welcome back");
        navigate('/');
        login();
        return;
      }
    
  }
  // Style objects for better organization
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '5px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px' 
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderBottom: '1px solid #ccc',
    padding: '5px 0'
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: '8px',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: '10px' }}>
          <UserRound size={48} color="#555" />
          <h2 style={{ marginTop: '10px' }}>Login</h2>
        </div>

        
        <div style={inputGroupStyle}>
          <UserRound size={20} color="#888" />
          <input 
            type='email'
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder='Enter Email'
            style={inputStyle}
            required
          />
        </div>

        {/* Password Input */}
        <div style={inputGroupStyle}>
          <LockKeyhole size={20} color="#888" />
          <input 
            type='password' // Changed from email to password
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder='Enter Password'
            style={inputStyle}
            required
          />
        </div>

        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: '14px' }}>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button style={{
          padding: '12px',
          backgroundColor:"rebeccapurple",
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Submit
        </button>
        <Link to='/register'>Not Register Yet?</Link>
      </form>
      
    </div>
  );
};
export default Login;
