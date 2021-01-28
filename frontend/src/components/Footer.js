import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4} className="py-3 text-center text-md-left text-lg-left order-1 order-md-0 order-lg-0">
                        <h6>
                            <Link to="/about" className="pr-2">
                                about
                            </Link>
                            <span>•</span>
                            <Link to="/contact" className="px-2">
                                contact
                            </Link>
                            <span>•</span>
                            <Link to="/privacy" className="pl-2">
                                privacy
                            </Link>
                        </h6>
                    </Col>
                    <Col sm={1} md={1}>
                    </Col>
                    <Col md={2} className="py-3 text-center order-1 order-md-0 order-lg-0">
                        <h6>hieu &copy; 2020</h6>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={4} className="py-1 text-center text-md-right text-lg-right">
                        <Link className='btn btn-news shadow-none px-2 py-2' to='/newsletter'>
                            sign up for newsletter
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
