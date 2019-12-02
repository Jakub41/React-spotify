import React from 'react';
import {Nav,  Navbar, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Sidebar() {
        return (
        <div >
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Song App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">



     <Nav.Link><Link to="/"                      > Home</Link></Nav.Link>
     <Nav.Link>        <Link to="#"              > Library</Link></Nav.Link>
     <Nav.Link>        <Link to='/pages/search'  > Search </Link></Nav.Link>
  
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
        );
    }
    export default Sidebar;