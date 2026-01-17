import React, { useState } from 'react'
import './App.css'
const App = () => {

  const initialVal=()=>Array(9).fill(null);
  const [board,setBoard]=useState(initialVal());

  const[winning,setWinning]=useState(false);
  const[input,setInput]=useState('');
  const[turn,setTurn]=useState(false);

  const handleReset=()=>{
    setBoard(initialVal());
    console.log(board);
  }

  const handleClick=()=>{
    
    if(turn == false){
      setInput('X');
      console.log(input);
      setTurn(true);

    }else if(turn == true){
      setInput('O');
      console.log(input);
      setTurn(false);
    }

  }

  // console.log(board);
  return (
    <div className='game'>
      <div className="status">
      Player 
      <button onClick={handleReset}>Reset</button>
      </div>

      <div className="box">
      {board.map(function(idx){
        return <button key={idx} onClick={handleClick}>{input}</button>
      })}
      </div>
    </div>
  )
}

export default App
