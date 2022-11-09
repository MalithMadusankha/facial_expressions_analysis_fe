import React, { useEffect } from "react";

// reactstrap components
import {
  Input,
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
import CaptionsTable from "components/UI/CaptionsTable";
import { Link } from "react-router-dom";

function FaceBookAnalysis() {
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
                    <h1 className="display-3 text-white">Face Book Analysis</h1>
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
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <Form className="">
                          <FormGroup>
                            <Label>Face Book ID</Label>
                            <div className="d-flex flex-row">
                              <Input
                                id="exampleEmail"
                                name="fb"
                                placeholder="enter your face book ID"
                                type="text"
                                size="sm"
                              />
                              <Button
                                color="primary"
                                size="sm"
                                className="col-3 ml-4"
                              >
                                <span>Login with Face Book</span>
                              </Button>
                            </div>
                          </FormGroup>{" "}
                        </Form>

                        <div className="mt-5">
                          <CaptionsTable />
                        </div>

                        <div className="mt-5">
                          <div className="row">
                            <div className="col-1" />
                            <div
                              className="bg-success mr-3"
                              style={{ width: 20, borderRadius: 4 }}
                            />
                            <Badge color="success">Positive visons</Badge>
                          </div>
                          <div className="row mt-3">
                            <div className="col-1" />
                            <div
                              className="bg-danger mr-3"
                              style={{ width: 20, borderRadius: 4 }}
                            />
                            <Badge color="danger">
                              worthlessness, hoplessness or guilt visons
                            </Badge>
                            <div className="col">
                              <Link
                                className="text-underline"
                                to="/facebook-result"
                              >
                                Show Final Resulet{" "}
                                <i className="bx bx-chevrons-right bx-fade-left ml-2"></i>
                              </Link>
                            </div>
                          </div>
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

export default FaceBookAnalysis;
