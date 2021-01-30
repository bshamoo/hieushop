import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckOutSteps from "../components/CheckOutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <Meta title="hieu | Payment Method" />
      <Header />
      <main>
        <Container>
          <FormContainer>
            <CheckOutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler} className="py-2">
              <Form.Group>
                <Form.Label as="legend">Select Method</Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="PayPal or Credit Card"
                    id="PayPal"
                    name="paymentMethod"
                    value="PayPal"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Stripe"
                    id="Stripe"
                    name="paymentMethod"
                    value="Stripe"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>
              <Button type="submit" className="btn-checkout">
                Continue
              </Button>
            </Form>
          </FormContainer>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PaymentScreen;
