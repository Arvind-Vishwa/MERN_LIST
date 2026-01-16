import React from 'react'
import NavbarScroll from './components/frontPage/Navbar'
import Center from './components/frontPage/Center'
import CardBasic from './components/frontPage/CardBasic'
import Card from './components/frontPage/Card'

const App = () => {
  return (
    <div>
      <NavbarScroll />
      <Center />
      <h1 style={{textAlign:"center", padding:"20px"}}>Product </h1>
      <Card />
    </div>
  )
}

export default App
