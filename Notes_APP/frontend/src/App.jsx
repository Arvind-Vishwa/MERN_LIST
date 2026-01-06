import { useEffect, useState } from "react";
function App(){

  const[data,setData]=useState([]);
  const[input,setInput]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    setData([...data,input]);
    setInput("");
  }

  function handleDel(e){
    e.preventDefault();
    setData([]);
  }

  function deleteItem(id){
    const updateItems=data.filter((_,idx)=>idx !== id);
    setData([updateItems]);
  }

  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button type="submit">Save</button>
      
    </form>

    <form onSubmit={handleDel}>
    <button type="Submit">Clear</button>
    </form>

    <div style={{height:"60px",width:"50px"}}>
    {
      data.map((dt,idx)=>(
        <p key={idx}>{dt}
        
        <button onClick={()=>{deleteItem(idx)}}>Delete</button>
        </p>
      ))
    }

    
    </div>
  </>
  );
}
export default App;