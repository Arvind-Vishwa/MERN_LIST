import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { contextValue } from '../ContextAPI/ContextData';

const CartItem = (props) => {
    const {cart,incrQty,decrQty,totalPrice}=useContext(contextValue);
    // console.log(props);
  return (
    <div >
    <Card style={{ width: '18rem' ,padding:"2rem", margin:"1rem"}}>
      <Card.Img variant="top" style={{height:"5rem"}} src={props.img} />
      <Card.Body style={{height:"10rem"}}>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Header>
          Rs: {props.price}
        </Card.Header>
        <Button variant="secondary"
        onClick={()=>{
          incrQty(props.id)
        }}
        style={{margin:"5px"}}
        >+</Button>
        &nbsp;
        <Button 
        onClick={()=>{
          decrQty(props.id)
        }}
        style={{margin:"5px"}}
        variant="danger">-</Button>
        <Button
        variant="success"
        style={{margin:"5px"}}
        >
        {props.qty}
        </Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default CartItem
