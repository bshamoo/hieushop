import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
    return (
        <>
            <Row className="text-center">
                <Col className="text-center">
                    <h1> debut collection winter 2020 </h1>
                </Col>
            </Row>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
