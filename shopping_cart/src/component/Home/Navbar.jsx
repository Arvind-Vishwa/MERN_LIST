import { ShoppingBag } from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { dataContext } from '../../ContextAPI/ContextData';
import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
function NavBar() {
  const {cartN}=useContext(dataContext)

  let sh=<span style={{backgroundColor:"red",textAlign:"top",borderRadius:"50%",color:"black",
    height:"4px",width:"4px",paddingTop:"2px"
  }}>{cartN}</span>
  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">login</Nav.Link>
            
          </Nav>
          <Button variant='outline'><ShoppingBag size={20} color="#ea0b0b" >
          </ShoppingBag>{sh}</Button>
        </Container>
      </Navbar>
      </>
  )
}
export default NavBar;
