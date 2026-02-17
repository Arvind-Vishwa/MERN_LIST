import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contextValue } from '../ContextAPI/ContextData';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { View } from 'lucide-react';

function CardEx(props) {
const {addTocart,removeItemCart}=useContext(contextValue);
  const product={
    id:props.id,
    image_url:props.imgage_url,
    description:props.description,
    price:props.price,
    title:props.title
  }
  
    
  return (
    
      <Card style={{ width: '18rem' ,padding:"7px", margin:"7px"}}>
      <Card.Img variant="top" style={{height:"12rem"}} src={props.image_url} />
      <Card.Body style={{height:"15rem"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
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
        <Link to={`/productDetail/${props.id}`} ><View size={20} color="#4316e3" /></Link>
      </Card.Body>
    </Card>
    
  );
}

export default CardEx;