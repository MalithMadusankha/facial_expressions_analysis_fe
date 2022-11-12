import React, { useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col, Button, Badge } from "reactstrap";

function FinalResult({ videoResult }) {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <>
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
                          Overall Result :{" "}
                          {videoResult.VideoResult === "Positive" ? (
                            <Button size="sm" color="warning">
                              medium
                            </Button>
                          ) : videoResult.VideoResult === "Negative" ? (
                            <Button size="sm" color="success">
                              low
                            </Button>
                          ) : (
                            <Button size="sm" color="danger">
                              high
                            </Button>
                          )}
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
                              difficulties,weight or apprtite changes like issue
                              now please try to change your life style and
                              practice <br /> good health habits.
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
                              Please get professional help and try to connect
                              with your family and friends.
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
    </>
  );
}

export default FinalResult;
