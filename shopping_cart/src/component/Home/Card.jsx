import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ShoppingCart,Trash2} from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../ContextAPI/ContextData';
function CardEx(props) {
  const {cartN,setCartN}=useContext(dataContext);

  const handleClick=(e)=>{
    let data=cartN;
    setCartN(data+1);
    console.log("btn id",e.target.id);
    console.log("count of cart",cartN);
  }
  const handleCart=(e)=>{
    console.log("cart items removed");
  }
  useEffect(()=>{
    localStorage.setItem(JSON.stringify('cart'),cartN);
  },[cartN])
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:"18rem"}} src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div >
        <Button style={{margin:"6px"}}
        variant="success" id={props.id} onClick={(e)=>{handleClick(e)}}><ShoppingCart /></Button>
        <Button variant="danger" id={props.id} onClick={(e)=>{handleCart(e)}}> <Trash2 /></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardEx;