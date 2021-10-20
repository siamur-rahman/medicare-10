
import './Header.css';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import carLogo from '../../../medicare-logo.jpg';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Header = () => {
   const { user, logOut } = useFirebase();

   return (
      <div className="header-container">
         <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
               <Container>

                  <Navbar.Brand href="#home" className="text-danger"> <img src={carLogo} style={{ height: '30px', width: '50px' }} alt="" />  MEDI Care</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                     <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                     <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                     <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>
                     <Nav.Link as={Link} to="/about">About us</Nav.Link>


                     {user?.email ?
                        <Navbar.Text className="mx-2">
                           Logged in success  <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> :
                        <Navbar.Text>
                        </Navbar.Text>
                     }
                     {user?.email ?
                        <Button className="text-primary bg-dark " onClick={logOut} > Logout </Button> :
                        <Nav.Link as={Link} to="/login" className="text-primary bg-dark " >Login</Nav.Link>
                     }

                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </>


      </div>
   );
};

export default Header;