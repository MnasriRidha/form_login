
import './App.css';
import * as ReactBootSTrap from "react-bootstrap";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
     <ReactBootSTrap.Navbar className="nav" bg-info text-dark expand="xxl" variant="danger" shadow-lg bg-white rounded >
 
    <ReactBootSTrap.Navbar.Brand className="wbs" href="#home" >Home</ReactBootSTrap.Navbar.Brand>
    <ReactBootSTrap.Nav.Link  href="#home">Products</ReactBootSTrap.Nav.Link>
    <ReactBootSTrap.Nav.Link href="#Inscription">Inscription
    
    </ReactBootSTrap.Nav.Link>
       
    <ReactBootSTrap.Navbar.Toggle className="navbr" aria-controls="basic-navbar-nav" variant="Secondary" />
    <ReactBootSTrap.Navbar.Collapse id="basic-navbar-nav" className="navbrclp" >
      <ReactBootSTrap.Nav className="me-auto" >
        <ReactBootSTrap.Nav.Link  href="#Facebook">Facebook</ReactBootSTrap.Nav.Link>
        <ReactBootSTrap.Nav.Link href="#Instagram">Instagram</ReactBootSTrap.Nav.Link>
        <ReactBootSTrap.Nav.Link href="#Twitter">Twitter</ReactBootSTrap.Nav.Link>
      </ReactBootSTrap.Nav>
      
    </ReactBootSTrap.Navbar.Collapse>
 
</ReactBootSTrap.Navbar>

    <Container className ="cont" bg="danger" expand="xxl" variant="dark">
              <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded"> Sign In</h1>
              <Row className="mt-5">
                  <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                          </Form.Group>

                          <Button variant="success btn-block" type="submit">
                              Login
                          </Button>
                      </Form>
                  </Col>
              </Row>
              <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Mnasri Ridha. All Rights Reserved.</h6>
          </Container>
   
    </div>
    );
  }


export default App;
