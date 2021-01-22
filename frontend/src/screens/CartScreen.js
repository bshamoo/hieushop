import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, Alert } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id

    const qty = 1
    const size = location.search ? String(location.search.split('=')[1]) : 'small'

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty, size))
        }
    }, [dispatch, productId, qty, size])

    const removeFromCartHandler = (id, size) => {
        dispatch(removeFromCart(id, size))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    
    return (
        <>
            <Meta title={`hieu | Cart`}/>
            <Link className='btn btn-light my-3 shadow-none' to='/'>
                <i className="fas fa-chevron-left"></i> 
                &nbsp;&nbsp;
                {cartItems.length === 0 ? <strong>back to shop</strong> : <strong>continue shopping</strong>} 
            </Link>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 
                    ? <Alert variant="light">Your cart is empty. <Link to='/'>Continue shopping.</Link></Alert> 
                    : <ListGroup variant='flush'>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col sm={3} md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Link>
                                    </Col>
                                    <Col sm={2} md={2}>
                                        <Link to={`/product/${item.product}`} className="font-weight-bold">
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col sm={2} md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col sm={2} md={2}>
                                        {item.size.toUpperCase()}
                                    </Col>
                                    <Col sm={2} md={2} className="py-2">
                                    <Form.Control 
                                        as='select' 
                                        value={item.qty} 
                                        onChange={(e) => dispatch(addToCart(item.product,
                                        Number(e.target.value), item.size))}
                                        className="py-3"
                                        >
                                            {[...Array(item.sizeInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                    </Form.Control>
                                    </Col>
                                    <Col sm={1} md={1} className="py-2">
                                        <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product, item.size)}>
                                            <i className="fas fa-times"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                      </ListGroup>
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items</h3>
                                <h6>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h6>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block btn-checkout' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                    Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            </>
    )
}

export default CartScreen
