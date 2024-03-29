import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShopScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Meta
        title="hieu | Shop"
        description="hieu, a las vegas clothing brand."
        keywords="streetwear, fashion, clothing brand, clothes, grailed, vegas clothing, las vegas brand"
      />
      <Header />
      <main>
        <Container>
          <Row>
            <Col className="text-center">
              <h3 className="collection-name font-weight-bold">
                collection 001{" "}
                <span className="collection-date"> spring 2021</span>
              </h3>
            </Col>
          </Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products.map((product, index) => (
                <Col sm={12} md={6} lg={4} xl={4} key={index}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ShopScreen;
