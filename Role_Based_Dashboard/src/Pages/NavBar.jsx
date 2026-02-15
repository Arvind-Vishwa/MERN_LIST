import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Key,LogOut } from 'lucide-react';
import { contextValue } from '../ContextAPI/ContextData';
import { useContext } from 'react';

function NavBar() {
  const {log,logout}=useContext(contextValue);
    const navigate=useNavigate();
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/product'>Product</Nav.Link>
            
          </Nav>
          <button 
          
          style={{border:"none",paddingRight:"10px"}}>cart:</button>
          
          {
            log ? (
              <button  
          onClick={()=>{
            logout();
            navigate('/login');
          }}
          style={{margin:"5px",padding:"6px",border:"none",borderRadius:"15px",backgroundColor:"transparent"}}>
            <LogOut /></button>

            ):(
              <button  
          onClick={()=>{
            navigate('/login');
          }}
          style={{margin:"5px",padding:"6px",border:"none",borderRadius:"15px",backgroundColor:"transparent"}}>
            <Key /></button>
            )
          }
          
        </Container>
      </Navbar>
  )}

export default NavBar;