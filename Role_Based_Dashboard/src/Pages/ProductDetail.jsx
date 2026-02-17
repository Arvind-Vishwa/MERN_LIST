import React, { useContext } from 'react'
import { data } from '../data';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contextValue } from '../ContextAPI/ContextData';
import NavBar from './NavBar';
import './ProductDetal.css'
const ProductDetail = () => {
  const {addTocart,removeItemCart}=useContext(contextValue);
  const {userId}=useParams();
  console.log(JSON.parse(userId));

  let pro=data.filter(item => item.id == userId);
  console.log(pro[0]);
  return (
    <>
    <NavBar />
    <div className='product-container' >
      
      <Card className="product-card">
        <Card.Img
          variant="top"
          className="product-image"
          src={pro[0].image_url}
        />
        <Card.Body className="product-body">
          <Card.Title className="product-title">
            {pro[0].title}
          </Card.Title>
  
          <Card.Text className="product-description">
            {pro[0].description}
          </Card.Text>
  
          <Card.Header className="product-price">
            Rs: {pro[0].price}
          </Card.Header>
  
          <div className="product-buttons">
            <Button
              variant="secondary"
              onClick={() => {
                addTocart(pro[0]);
              }}
            >
              Add to Cart
            </Button>
  
            <Button
              onClick={() => {
                removeItemCart(pro[0].id);
              }}
              variant="danger"
            >
              Remove cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </>
  );
  
}

export default ProductDetail
