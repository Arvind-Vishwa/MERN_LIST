import React, { useState } from 'react'

const InsideCmpo = () => {

    const [data,setData]=useState([]);
    const[input,setInput]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setData(prev=>[...prev,input]);
        setInput("");
    }
    const handleChange=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        className='border-2 rounded text-black'
        onChange={handleChange}
        value={input}
        type='text'
        />
        <button type='submit' className='bg-red-400 p-2 rounded m-3 '>Add</button>
      </form>
      <div>
        {data.map(function(ele,idx){
          return <h1 key={idx}>{ele}</h1>
        })}
      </div>
      
    </div>
    
  )
}

export default InsideCmpo
