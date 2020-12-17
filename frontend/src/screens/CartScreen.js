import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id

    const qty = 1
    const sz = location.search ? String(location.search.split('=')[2]) : 'SMALL'

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty, sz))
        }
    }, [dispatch, productId, qty, sz])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    
    return (
        <>
            <Link className='btn btn-light my-3 shadow-none' to='/shop'>
                
                <h7>
                    <i class="fas fa-chevron-left"></i> 
                    &nbsp;&nbsp;
                    {cartItems.length === 0 ? <strong>back to shop</strong> : <strong>continue shopping</strong>} 
                </h7>
            </Link>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 
                    ? <Message variant="light">Your cart is empty. <Link to='/shop'>Continue shopping.</Link></Message> 
                    : <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={1}>
                                        {item.sz}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control 
                                            as='select' 
                                            value={item.qty} 
                                            onChange={(e) => dispatch(addToCart(item.product,
                                            Number(e.target.value), sz))}
                                            >
                                            {[...Array(item.countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                            <i class="fas fa-trash-alt"></i>
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
