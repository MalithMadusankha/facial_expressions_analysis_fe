import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Table,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Index";
import SimpleFooter from "components/Footers/SimpleFooter";

import VideoRoc from "components/UI/VideoRoc";

function OnTimeSession() {
  /*eslint-disable*/
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
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">On Time Session</h1>
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
                        <Label>Questions</Label>

                        <div className="mt-3">
                          <div>
                            <Table size="sm">
                              <tbody>
                                {querstions.map((que, index) => (
                                  <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{que.question}</td>
                                    <td>
                                      <Button size="sm" color="warning">
                                        select
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </div>

                        <div className="mt-5">
                          <h4>Rocording</h4>
                          <Row className="ml-1 mt-3">
                            <Col>
                              <VideoRoc />
                            </Col>
                            <Col>
                              <Table size="sm">
                                <tbody>
                                  {answer.map((que, index) => (
                                    <tr
                                      key={index}
                                      className="justify-content-center"
                                    >
                                      <td>{que.question}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                              <div className="text-center mt-5">
                                <Button href="/session-result" color="success">
                                  Submite
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
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

export default OnTimeSession;
