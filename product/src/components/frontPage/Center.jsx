import Carousel from 'react-bootstrap/Carousel';

function Center() {
  return (
    <Carousel data-bs-theme="dark" fade >
      <Carousel.Item prevIcon='undefined'>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/66faf3950cda0b7a.png?q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1f9c9ad24c2bc37b.jpg?q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Center;