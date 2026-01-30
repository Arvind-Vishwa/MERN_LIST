import React, { useEffect, useState } from 'react'
import { data } from './Data';
import CardExa from './Card';
const CardRender = () => {

    const[userData,setUserData]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        
        setUserData(data);
        setLoading(true);
    },[1000])

    let load=<h1 style={{backgroundColor:"red", padding:"10px", textAlign:"center"}}>....Loading</h1>
  return (
    <div style={{display:"flex",flexWrap:'wrap', gap:"24px",justifyContent:"space-around", padding:"10px"}}>
       {
        loading && userData.map(function(el,idx){
            return <div key={idx}>
                <CardExa author={el.author} description={el.description}
                email={el.email} image={el.image} category={el.category}/> 
            </div>
        })
    }
    {!loading && load}
    </div>
  )
}

export default CardRender
