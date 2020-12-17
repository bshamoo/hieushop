import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from './logo.svg';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant='light' expand="md" fixed="top" className="py-0" collapseOnSelect>
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav" className="order-1 order-md-0 order-lg-0">
                        <Nav className="mr-auto">
                            <Row className="text-center">
                                <Col xs={12} md={6}>
                                    <LinkContainer to="/">
                                        <Nav.Link className="social">
                                            <h2><i class="fab fa-instagram"></i></h2>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Col>
                                <Col xs={12} md={6}>
                                    <LinkContainer to="/">
                                        <Nav.Link className="social">
                                            <h2><i class="fab fa-tiktok"></i></h2>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                        <Nav className="ml-auto">
                            <Row className="text-center ">
                                <Col>
                                    <LinkContainer to="/shop">
                                        <Nav.Link >
                                            <h2 className="font-weight-bolder">shop</h2>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto"/>
                    <Navbar.Brand className="m-auto order-0 order-md-0 order-lg-0">
                        <Row>
                            <Col>
                                <Logo className="logo" height={100} width={200}/>  
                            </Col>
                        </Row> 
                    </Navbar.Brand>
                    <Nav className="ml-auto order-0 order-md-1 order-lg-1">
                        <Row className="text-center">
                            <Col>
                                <LinkContainer to="/login">
                                    <Nav.Link className="user">
                                        <h2><i class="far fa-user-circle"></i></h2>
                                    </Nav.Link>
                                </LinkContainer>
                            </Col>
                            <Col>
                                <LinkContainer to="/cart">
                                    <Nav.Link className="user">
                                        <h2><i class="fas fa-shopping-bag"></i></h2>
                                    </Nav.Link>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Nav>
                    <Navbar.Collapse id="responsive-navbar-nav order-1 order-md-0 order-lg-0">
                        <Nav className="mr-auto">
                            <Row className="text-center">
                                <Col>
                                <LinkContainer to="/book">
                                    <Nav.Link>
                                        <h2 className="font-weight-bolder">book</h2>
                                    </Nav.Link>
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
