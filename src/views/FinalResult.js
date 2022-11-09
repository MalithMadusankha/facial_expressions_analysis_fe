import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Table,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Badge,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Index";
import SimpleFooter from "components/Footers/SimpleFooter";

import { Link } from "react-router-dom";

import GiphyHi from "../assets/img/theme/giphy-hi-left.gif";
import Greeting from "../assets/img/theme/greeting-removebg.png";

function FinalResult() {
  const [querstions, setQuerstions] = useState([
    { question: "What is your  name ?", recording: "path" },
    { question: "What is your  viallage ?", recording: "path" },
    { question: "What is your  full name ?", recording: "path" },
    { question: "What is your  school ?", recording: "path" },
  ]);
  const [answer, setAnswer] = useState([
    { question: "Question 1 is recorded", recording: "path" },
    { question: "Question 2 is recorded", recording: "path" },
    { question: "Question 3 is recorded", recording: "path" },
  ]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex ">
              <div className="col px-0">
                <Row>
                  <Col>
                    <h1 className="display-3 text-white">Session Result</h1>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col>
                    <Card className="shadow border-0">
                      <CardBody className="py-5">
                        <Row>
                          <Col>
                            <h6>
                              We are analyzing your facial expressions,speech
                              pattern and the words to give youa more accurate
                              result base on your session participation details.
                            </h6>
                            <h5 className=" mt-5">
                              Result : <Badge color="success">low</Badge>{" "}
                            </h5>
                            <Row className="mt-5">
                              <Col className="col-1 mr-5">
                                <Button size="sm" color="success">
                                  low
                                </Button>
                              </Col>

                              <Col>
                                {" "}
                                <h6>
                                  You are in good mental health, Please continue
                                  your good habits in your life.
                                </h6>
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <Col className="col-1 mr-5">
                                <Button size="sm" color="warning">
                                  medium
                                </Button>
                              </Col>
                              <Col>
                                <h6>
                                  You are in the early state of the depression
                                  causing level. If you have low mood, sleep
                                  difficulties,weight or apprtite changes like
                                  issue now please try to change your life style
                                  and practice <br /> good health habits.
                                </h6>
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <Col className="col-1 mr-5">
                                <Button size="sm" color="danger">
                                  high
                                </Button>
                              </Col>
                              <Col>
                                <h6>
                                  Please get professional help and try to
                                  connect with your family and friends.
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default FinalResult;
