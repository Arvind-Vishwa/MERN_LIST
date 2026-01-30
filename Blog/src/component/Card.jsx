import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardExa(props) {
  return (
    <Card style={{ width: '18rem',display:'flex',flexDirection:"column",padding:'5px', borderRadius:"10px" }}>
      <Card.Img variant="top" src={props.image} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title 
        >{props.author}</Card.Title>
        <Card.Text
        >
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.email}</ListGroup.Item>
        <ListGroup.Item style={{background:"pink"}}>{props.category}</ListGroup.Item>
        
      </ListGroup>
      
    </Card>
  );
}

export default CardExa;