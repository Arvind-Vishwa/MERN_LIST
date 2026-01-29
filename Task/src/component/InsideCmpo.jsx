import React, { useState } from 'react'

const InsideCmpo = () => {

    const [data,setData]=useState([]);
    const[input,setInput]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input)
        setData(prev=>[...prev,input]);
        setInput("");
    }
    const handleChange=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    }
    const handleDelete=(id)=>{
      setData(prev=>prev.filter((_,index) => id !== index));
    }
  return (
    <div className='text-center p-5'>
      <form onSubmit={handleSubmit}>
        <textarea
        rows={5}
        cols={60}
        className='border-2 rounded text-black'
        onChange={handleChange}
        value={input}
        type='text'
        placeholder='Enter task'
        />
        <button type='submit' className='cursor-pointer border-2 p-3 rounded m-2 '>Add</button>
      </form>
      <div>
        {data.map(function(ele,idx){
          return <div key={idx} className='flex text-center justify-around p-4'>
            <h1 className='border-2 rounded bg-cyan-300 w-52'>{ele}

            </h1>
            <button onClick={()=>{handleDelete(idx)}} className='outline bg-amber-400 cursor-pointer rounded-b-sm'>Completed</button>
          </div>
        })}
      </div>
      
    </div>
    
  )
}

export default InsideCmpo
