import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-left">
                        about • contact • terms • privacy
                    </Col>
                    <Col className="py-2 text-center">
                        hieu &copy; 2020 
                    </Col>
                    <Col className="py-2 text-right">
                        sign up for newsletter
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
