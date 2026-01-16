import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Percent } from 'lucide-react';
function CardBasic(props) {
  return (
    
    <Card >
      <Card.Img  variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.offer}
        </Card.Text>
        <Button variant="outline-warning">Check Out</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBasic;