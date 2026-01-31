import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from './Data.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductDetail = () => {
    const {id}=useParams();
    // console.log(blog);

    let pro;
    for(let d of data){
        if(d.id == id){
            pro=d;
        }
    }
    
  return (
    <div>
      <Card style={{ width: '18rem',display:'flex',padding:'10px', borderRadius:"10px",textAlign:"center", justifySelf:"center", marginTop:"20px"  }}>
    <Card.Img variant="top" src={pro.image} style={{height:"200px"}} />
    <Card.Body>
      <Card.Title 
      >{pro.author}</Card.Title>
      <Card.Text>
        {pro.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{pro.email}</ListGroup.Item>
      <ListGroup.Item style={{background:"pink"}}>{pro.category}</ListGroup.Item>
      
    </ListGroup>
    
  </Card>
    </div>
  )
}

export default ProductDetail
