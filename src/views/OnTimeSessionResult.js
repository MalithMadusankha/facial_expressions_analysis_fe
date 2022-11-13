import React, { useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col, Badge } from "reactstrap";

// core components
import Navbar from "components/Navbars/Index";
import SimpleFooter from "components/Footers/SimpleFooter";

import GiphyHi from "../assets/img/theme/giphy-hi-left.gif";
import Greeting from "../assets/img/theme/greeting-removebg.png";

function OnTimeSessionResult({ average }) {
  const [nomOrModerate, setNomOrModerate] = useState(false);
  useEffect(() => {
    if (average > 0.5) {
      setNomOrModerate(true);
    } else {
      setNomOrModerate(false);
    }
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
                        <h5 className="text-success ">
                          Hi dear, You are in
                          {nomOrModerate ? (
                            <Badge color="primary" className="mx-2">
                              {" "}
                              Normal{" "}
                            </Badge>
                          ) : (
                            <Badge color="warning" className="mx-2">
                              {" "}
                              Moderate{" "}
                            </Badge>
                          )}
                          Level !
                        </h5>
                        <h5 className="text-primary mt-5">
                          {" "}
                          Explation about the label
                        </h5>

                        <h6 className="mt-4">
                          <Badge color="primary">Normal</Badge> You are in good
                          mental health, Please continue your good habits in
                          your life.
                        </h6>

                        <h6 className="mt-4">
                          <Badge color="warning">Moderate</Badge> You are more
                          like to suffer from depression, Please meet a doctor
                          and take the necessaty consultatins.
                        </h6>
                      </Col>
                      <Col
                        style={{
                          backgroundImage: `url(${GiphyHi})`,
                          height: "200px",
                          marginTop: "50px",
                          fontSize: "50px",
                          marginRight: "-950px",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <img
                          src={Greeting}
                          alt="DontWorryImg"
                          style={{
                            width: 300,
                            marginLeft: "-200px",
                            marginTop: "-115px",
                          }}
                        />
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

export default OnTimeSessionResult;
