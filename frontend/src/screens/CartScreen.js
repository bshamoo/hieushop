import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CounterInput from "react-counter-input";

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1].split('?')[0]) : 1
    const sz = location.search ? String(location.search.split('=')[2]) : 'small'

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
                                        {item.sz.toUpperCase()}
                                    </Col>
                                    <Col md={2}>
                                    {/*
                                    <Form.Control 
                                        as='select' 
                                        value={item.qty} 
                                        onChange={(e) => dispatch(addToCart(item.product,
                                        Number(e.target.value), item.sz))}
                                        >
                                            {[...Array(item.countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                    </Form.Control>
                                    */}
                                        <CounterInput btnStyle={{color: 'black'}} inputStyle={{background: 'rgba(201, 201, 201, 0.2)'}}
                                        count={1} min={1} max={item.countInStock} onCountChange={(count) => dispatch(addToCart(item.product, Number(count), item.sz))} />
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                            <i class="fas fa-times"></i>
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
