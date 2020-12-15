import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from './logo.svg';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav" className="order-1 order-md-0 order-lg-0">
                        <Nav className="mr-auto">
                            <Row className="text-center">
                                <Col xs={12} md={6}>
                                    <LinkContainer to="/">
                                        <Nav.Link><i class="fab fa-instagram"></i></Nav.Link>
                                    </LinkContainer>
                                </Col>
                                <Col xs={12} md={6}>
                                    <LinkContainer to="/">
                                        <Nav.Link><i class="fab fa-twitter"></i></Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                        <Nav className="ml-auto">
                            <Row className="text-center ">
                                <Col>
                                    <LinkContainer to="/shop">
                                        <Nav.Link>shop</Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto"/>
                    <Navbar.Brand className="m-auto order-0 order-md-0 order-lg-0">
                        <Row>
                            <Col>
                                <Logo height={85} width={150}/>  
                            </Col>
                        </Row> 
                    </Navbar.Brand>
                    <Nav className="ml-auto order-0 order-md-1 order-lg-1">
                        <Row className="text-center">
                            <Col>
                                <LinkContainer to="/login">
                                    <Nav.Link><i class="far fa-user-circle"></i></Nav.Link>
                                </LinkContainer>
                            </Col>
                            <Col>
                                <LinkContainer to="/cart">
                                    <Nav.Link><i class="fas fa-shopping-bag"></i></Nav.Link>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Nav>
                    <Navbar.Collapse id="responsive-navbar-nav order-1 order-md-0 order-lg-0">
                        <Nav className="mr-auto">
                            <Row className="text-center">
                                <Col>
                                <LinkContainer to="/book">
                                    <Nav.Link>book</Nav.Link>
                                </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
