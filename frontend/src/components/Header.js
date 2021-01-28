import React from 'react';
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from './logo.svg';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <header>
            <Navbar bg="light" variant='light' expand="md" fixed="top" className="py-0" collapseOnSelect>
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav" className="order-1 order-md-0 order-lg-0">
                        <Nav className="mr-auto">
                            <Row className="text-center">
                                <Col xs={12} md={6}>
                                    <Nav.Item>
                                            <a className="social" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hieulasvegas/">
                                                <h3><i className="fab fa-instagram"></i></h3>
                                            </a>
                                    </Nav.Item>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Nav.Item className="pl-md-1 pr-md-4">
                                            <a className="social" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@hieulasvegas?lang=en">
                                                <h3><i className="fab fa-tiktok"></i></h3>
                                            </a>
                                    </Nav.Item>
                                </Col>
                            </Row>
                        </Nav>
                        <Nav className="ml-auto">
                            <Row className="text-center">
                                <Col>
                                    <LinkContainer to="/">
                                        <Nav.Link >
                                            <h3 className="font-weight-bolder">shop</h3>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto order-0 order-xs-1 order-md-0 order-lg-0"/>
                    <Navbar.Brand className="m-auto order-0 order-md-0 order-lg-0">
                        <Row>
                            <Col>
                                <Logo className="logo" height={90} width={190}/>  
                            </Col>
                        </Row> 
                    </Navbar.Brand>
                    <Nav className="ml-auto order-0 order-md-1 order-lg-1">
                        <Row className="text-center pt-3">
                            <Col className="pt-2">
                                {userInfo ? (
                                    <LinkContainer to='/profile'>
                                        <Nav.Link className="user">
                                            <h3><i className="fas fa-user-circle"></i></h3>
                                        </Nav.Link>
                                    </LinkContainer>
                                ) : <LinkContainer to="/login">
                                        <Nav.Link className="user">
                                            <h3><i className="far fa-user-circle"></i></h3>
                                        </Nav.Link>
                                    </LinkContainer> }
                            </Col>
                            <Col className="pt-2">
                                <LinkContainer to="/cart">
                                    <Nav.Link className="user">
                                        <h3>
                                            <i className="fas fa-shopping-bag">
                                                <h6 className="font-weight-bold">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</h6>
                                            </i>
                                        </h3>
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
                                            <h3 className="font-weight-bolder">book</h3>
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
