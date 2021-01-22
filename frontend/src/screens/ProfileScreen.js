import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { logout } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading:loadingOrders, error:errorOrders, orders } = orderListMy

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if(!user || !user.name || success ) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords do not match')

        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <Meta title='hieu | Profile'/>
            <Row>
                <Col md={3} className="pb-4">
                    <h2>
                        Profile
                    </h2>
                    {message && <Message variant='danger'>{message}</Message>}
                    {}
                    {success && <Message variant='success'>Profile Updated</Message>}
                    {loading ? (
                    <Loader />
                    ) : error ? (
                    <Message variant='danger'>{error}</Message>
                    ) : (
                    <Form onSubmit={submitHandler} className="pb-5">
                        <Form.Group controlId='name'>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control 
                                type="name" 
                                placeholder="Enter name" 
                                className="px-3"
                                value={name} onChange={(e) => setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                className="px-3"
                                value={email} onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                className="px-3"
                                value={password} onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Confirm password" 
                                className="px-3"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" className="btn-login">
                            Update
                        </Button>
                        <Button variant="light"  className="float-right" onClick={logoutHandler}>
                            Logout
                        </Button>
                    </Form>
                    )}
                </Col>
                <Col md={9}>
                    <h2>My Orders</h2>
                    {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>
                    {errorOrders}</Message> : (
                        <Table striped bordered hover responsive className="table-sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order._id}>
                                        <td>#{order._id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>${order.totalPrice}</td>
                                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                            <i className='fas fa-times' style={{ color: "red" }}></i>
                                        )}</td>
                                        <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : (
                                            <i className='fas fa-times' style={{ color: "red" }}></i>
                                        )}</td>
                                        <td>
                                            <LinkContainer to={`/order/${order._id}`}>
                                                <Button variant="light" className="btn-sm btn-block"><i className="fas fa-angle-double-right"></i></Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                    {userInfo && userInfo.isAdmin && ( 
                        <>
                            <h4>Admin</h4>
                            <LinkContainer to='/admin/userlist'>
                                <Dropdown.Item>Users</Dropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/productlist'>
                                <Dropdown.Item>Products</Dropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/orderlist'>
                                <Dropdown.Item>Orders</Dropdown.Item>
                            </LinkContainer>
                        </>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default ProfileScreen