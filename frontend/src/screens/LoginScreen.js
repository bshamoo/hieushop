import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/profile";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Meta title="hieu | Sign In" />
      <Header />
      <main>
        <Container>
          <Row className="align-items-center justify-content-center centered-signin">
            <Col className="text-center">
              <h3 className="collection-name font-weight-bold">
                collection 001{" "}
                <span className="collection-date"> spring 2021</span>
              </h3>
            </Col>
          </Row>
          <FormContainer>
            <h1 className="font-weight-bold">Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="px-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="px-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="btn-login">
                Sign In
              </Button>
            </Form>
          </FormContainer>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default LoginScreen;

/*
<Row className="py-3">
              <Col>
                New Customer?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  {" "}
                  <strong>Create Account</strong>
                </Link>
              </Col>
            </Row>
*/
