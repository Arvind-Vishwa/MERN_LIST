
import { dataContext } from '../../ContextAPI/ContextData';
import { useContext } from 'react';
import CartItem from '../Home/CartItem.jsx'
import Card from 'react-bootstrap/Card';
const Cart = () => {
    const {cart,totalPrice}=useContext(dataContext);
    
    if(cart.length === 0){
      return <h2>Your cart is empty!</h2>
    }
    
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
      { cart.map(function(p){
        return <div key={p.id}>
            <Card  style={{ width: '10rem' }}>
              <Card.Img variant="top" style={{height:"10rem",borderRadius:"50%"}} src={p.image} />
              <Card.Body >
                <Card.Title style={{fontSize:"15px"}}>{p.title}</Card.Title>
                <h4>Rs:{p.price}</h4>
              </Card.Body>

              <CartItem id={p} />
            </Card>
            <h2>Total Price:{totalPrice} </h2>
        </div>
      }
    )
}
    
    </div>
  )
}

export default Cart
