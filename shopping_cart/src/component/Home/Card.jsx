import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Bold, ShoppingCart,Trash2} from 'lucide-react';
import { useContext } from 'react';
import { dataContext } from '../../ContextAPI/ContextData';


function CardEx(props) {
  const {cart,addToCart,removeItem}=useContext(dataContext);
  const product={
    id:props.id,
    title:props.title,
    description:props.description,
    image:props.image,
    price:props.price
  }
  // console.log(cart);
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:"18rem"}} src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <h4>Rs:{props.price}</h4>
        
        
        <div >
        <Button style={{margin:"6px"}}
        variant="success" onClick={()=>{addToCart(product)}}><ShoppingCart /></Button>
        <Button variant="danger" onClick={()=>{removeItem(props.id)}}> <Trash2 /></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardEx;