import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import moment from "moment";
import Meta from "../components/Meta";

const LandingScreen = () => {
  return (
    <>
      <Meta
        title="nice to meet hieu."
        description="hieu, a las vegas clothing brand."
        keywords="streetwear, fashion, clothing brand, clothes, grailed, vegas clothing, las vegas brand"
      />
      <div className="crt">
        <div className="dice">
          <Row className="justify-content-center text-center mt-1">
            <Col>
              <h6 className="font-weight-normal">
                {moment().format("MM/DD/YYYY")}{" "}
                <Clock
                  format={"hh:mm:ssa"}
                  ticking={true}
                  timezone={"US/Pacific"}
                />{" "}
                Las Vegas
              </h6>
            </Col>
          </Row>
          <div className="centered">
            <Row className="justify-content-center text-center">
              <Col>
                <Link to="/shop">
                  <h1>shop</h1>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center text-center my-3">
              <Col>
                <Link to="/book">
                  <h1>lookbook</h1>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center text-center">
              <Col className="mb-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hieulasvegas/"
                >
                  <h1>
                    <i className="fab fa-instagram"></i>
                  </h1>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@hieulasvegas?lang=en"
                >
                  <h1>
                    <i className="fab fa-tiktok"></i>
                  </h1>
                </a>
              </Col>
            </Row>
          </div>
          <div className="bottom-footer">
            <Row className="justify-content-center text-center mb-3">
              <Col>
                <h6 className="font-weight-normal">hieu &copy; 2021</h6>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
