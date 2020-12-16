import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <Row className="text-center">
                <Col className="text-center">
                    <h3 className="collection-name font-weight-bold">vegas collection <span className="collection-date">winter 2021</span></h3>
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
