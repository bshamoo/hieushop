import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFoundScreen = () => {
  return (
    <>
      <Meta title="hieu | 404 Page Not Found" />
      <Header />
      <main>
        <Container>
          <div className="centered-notfound">
            <Row className="align-items-center justify-content-center text-center">
              <Col className="text-center">
                <Player
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/packages/lf20_s4Nysi.json"
                  style={{ height: "250px", width: "250px" }}
                ></Player>
                <h1>Page Not Found</h1>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundScreen;
