import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, ListGroupItem} from 'react-bootstrap';
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProduct()
    }, [match])

    return (
        <>
            <Link className='btn btn-light my-3 shadow-none' to='/shop'>
                <h7>
                    <i class="fas fa-chevron-left"></i> <strong>back to shop</strong>
                </h7>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>
                                <strong>{product.name}</strong>
                            </h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block btn-cart shadow-none" type="button" disabled={product.countInStock === 0}>
                                {product.countInStock > 0 ? 'Add to Cart' : 'Sold Out'}
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
