import React, { Component } from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'


  
export default class NavBar extends Component {
    render() {
        
        return (
                <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom:"20px"}}>
                    <Container>
                        <Navbar.Brand as={Link} to="/">Aesthetically Social</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <>
                                
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                                <Nav.Link as={Link} to="/myposts">My Posts</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                  
                            </>
                            :
                            <>
                            <Nav.Link as={Link}  to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                            
                        </Nav>
                        <span className="float-end" style={{color:'white'}}>Welcome, beautiful!</span>
                        
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
               


        )
    }
}

/* {this.props.token ?
                            <>
                                
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                  
                            </>
                            :
                            <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                            }
*/