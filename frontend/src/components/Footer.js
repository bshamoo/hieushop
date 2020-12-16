import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="py-3 text-left">
                        <h6>about • contact • terms • privacy</h6>
                    </Col>
                    <Col className="py-3 text-center">
                        <h6>hieu &copy; 2020</h6>
                    </Col>
                    <Col className="py-1 text-right">
                        <Link className='btn btn-news shadow-none px-2 py-2' to='/'>
                            sign up for newsletter
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
