import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardEx(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:"18rem"}} src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardEx;