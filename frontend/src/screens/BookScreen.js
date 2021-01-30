import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

const BookScreen = () => {
  return (
    <>
      <Meta title="hieu | Book" />
      <Header />
      <main>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col className="text-center">
              <h3 className="collection-name font-weight-bold">
                collection 001{" "}
                <span className="collection-date"> spring 2021</span>
              </h3>
              <h3 className="font-weight-bold">coming soon</h3>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BookScreen;
