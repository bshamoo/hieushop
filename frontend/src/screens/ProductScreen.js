import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listProductDetails } from "../actions/productActions";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductScreen = ({ history, match }) => {
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?sz=${size}`);
  };

  const setSM = () => {
    setSize("small");
  };
  const setMD = () => {
    setSize("medium");
  };
  const setLG = () => {
    setSize("large");
  };

  return (
    <>
      <Header />
      <main>
        <Container>
          <Link className="btn btn-light my-3 shadow-none" to="/shop">
            <i className="fas fa-chevron-left"></i>
            &nbsp;&nbsp;
            <strong>back to shop</strong>
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Meta title={`hieu | ${product.name}`} />
              <Row>
                <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                <Col md={6}>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <h3>
                        <strong>{product.name}</strong>
                      </h3>
                      <h6>{product.collectionName}</h6>
                    </ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          <strong>
                            {product.totalInStock === 0
                              ? "Out of Stock"
                              : "In Stock"}
                          </strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    {product.totalInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col md={6} className="pb-2">
                            Size:
                          </Col>
                          <Col xs={3} sm={3} md={2} className="text-left">
                            <Button
                              type="button"
                              className={
                                size === "small"
                                  ? "btn-sizes px-4 px-md-3 px-lg-4 active"
                                  : "btn-sizes px-4 px-md-3 px-lg-4"
                              }
                              onClick={setSM}
                              disabled={product.sizeInStock.small === 0}
                            >
                              <strong>S</strong>
                            </Button>
                          </Col>
                          <Col xs={3} sm={3} md={2} className="text-center">
                            <Button
                              type="button"
                              className={
                                size === "medium"
                                  ? "btn-sizes px-4 px-md-3 px-lg-4 active"
                                  : "btn-sizes px-4 px-md-3 px-lg-4"
                              }
                              onClick={setMD}
                              disabled={product.sizeInStock.medium === 0}
                            >
                              <strong>M</strong>
                            </Button>
                          </Col>
                          <Col xs={3} sm={3} md={2} className="text-right">
                            <Button
                              type="button"
                              className={
                                size === "large"
                                  ? "btn-sizes px-4 px-md-3 px-lg-4 active"
                                  : "btn-sizes px-4 px-md-3 px-lg-4"
                              }
                              onClick={setLG}
                              disabled={product.sizeInStock.large === 0}
                            >
                              <strong>L</strong>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroupItem>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block btn-cart shadow-none"
                        type="button"
                        disabled={product.totalInStock === 0 || size === ""}
                      >
                        {product.totalInStock === 0
                          ? "Sold Out"
                          : "Add to Cart"}
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductScreen;
