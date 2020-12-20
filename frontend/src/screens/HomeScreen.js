import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Row>
                <Col className="text-center">
                    <h3 className="collection-name font-weight-bold">vegas collection <span className="collection-date">winter 2021</span></h3>
                </Col>
            </Row>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={4} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            }
        
        </>
    )
}

export default HomeScreen
