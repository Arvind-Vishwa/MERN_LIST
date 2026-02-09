import { Link ,useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { dataContext } from '../../ContextAPI/ContextData';
import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
function NavBar() {
  const {cart,log,login,logout}=useContext(dataContext);
  const navigate=useNavigate();
  
  const item=cart.reduce((sum,item)=>sum+item.qty,0);

  let sh=<span style={{textAlign:"top",borderRadius:"50%",color:"black",
    height:"4px",width:"4px",paddingTop:"2px"
  }}>{item}</span>
  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            {
              log ? (
                <Button
                onClick={()=>{
                  logout();
                  navigate('/login');
                }}
                >
                  LogOut
                </Button>
              ):(
                <Nav.Link as={Link} to="/login">login</Nav.Link>
              )
            }
            
          </Nav>
          <Link to='/cartitem'><Button variant='light'>
          cart:&nbsp;{sh}</Button></Link>
        </Container>
      </Navbar>
      </>
  )
}
export default NavBar;
