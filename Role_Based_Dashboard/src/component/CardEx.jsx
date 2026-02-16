import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contextValue } from '../ContextAPI/ContextData';
import { useContext } from 'react';

function CardEx(props) {
const {addTocart,removeItemCart}=useContext(contextValue);
  const product={
    id:props.id,
    img:props.img,
    desc:props.desc,
    price:props.price,
    title:props.title
  }
  
    
  return (
    <Card style={{ width: '18rem' ,padding:"7px", margin:"7px"}}>
      <Card.Img variant="top" style={{height:"12rem"}} src={props.img} />
      <Card.Body style={{height:"15rem"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Card.Header>
          Rs: {props.price}
        </Card.Header>
        <Button variant="secondary"
        onClick={()=>{
          addTocart(product);
        }}
        >Add to Cart</Button>
        &nbsp;
        <Button 
        onClick={()=>{
          removeItemCart(props.id);
        }}
        variant="danger">Remove cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardEx;