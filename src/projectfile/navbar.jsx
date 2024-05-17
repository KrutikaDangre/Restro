import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HotelNavbar() {
  return (
    <>
    
     <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img src="images/logo.jpg" alt=""className='logoimg' />
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navaber-top' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="nav-link  hover:text-red-400">Home</Link>
            <Link to="/rooms" className="nav-link   hover:text-red-400">Rooms</Link>
            <Link to="/dining" className="nav-link  hover:text-red-400">Dining</Link>
            <Link to="/contact" className="nav-link  hover:text-red-400">Contact Us</Link>
            {/* <Link to="/booknow" className="nav-link">Booking</Link> */}
            </Nav>
            <Link to="/booknow"><button className='bg-dark text-white p-2 rounded-1  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 ' Link to='/booknow' >Book Now</button></Link> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
   
     

      
  );
}

export default HotelNavbar;



