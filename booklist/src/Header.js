import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar expand="lg" className="navbar text-white">
      <Container>
       
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-evenly">
        <Navbar.Brand className="text-white" href="#home">Elimu~Leo</Navbar.Brand>
          <Nav.Item className="ms-2">
            <Nav.Link href="#home"> <span><i className='fa fa-home'></i></span> &nbsp; Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ms-2"> <Nav.Link href="#home"><span><i className='fa fa-book'></i></span> &nbsp; Booklist</Nav.Link>  </Nav.Item>
          <Nav.Item className="ms-2"> <Nav.Link href="#home"><span><i className='fa fa-user'></i></span> &nbsp;Account</Nav.Link>  </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  
}


export default Header;
