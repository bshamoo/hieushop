import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, ListGroupItem, Form} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className='btn btn-light my-3 shadow-none' to='/shop'>
                <h7>
                    <i class="fas fa-chevron-left"></i>
                    &nbsp;&nbsp;
                    <strong>back to shop</strong>
                </h7>
            </Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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
                                        <strong>{product.countInStock === 0 ? 'Out of Stock' : 'In Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Size:
                                        </Col>
                                        <Col>
                                            <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroupItem>
                                <Button onClick={addToCartHandler} className="btn-block btn-cart shadow-none" type="button" disabled={product.countInStock === 0}>
                                    {product.countInStock === 0 ? 'Sold Out' : 'Add to Cart'}
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductScreen
