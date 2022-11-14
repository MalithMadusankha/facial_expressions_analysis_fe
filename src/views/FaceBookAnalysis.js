import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

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
  Badge,
  Table,
} from "reactstrap";
// 546312607495299
// core components
import Navbar from "components/Navbars/Index";
import SimpleFooter from "components/Footers/SimpleFooter";
import { Link } from "react-router-dom";
import OnTimeSessionResult from "./OnTimeSessionResult";
import Loading from "components/UI/Loading";

const axios = require("axios").default;

function FaceBookAnalysis() {
  const [fbID, setFbID] = useState("546312607495299");
  const [posters, setPosters] = useState([]);
  const [average, setAverage] = useState(0);
  const [showFinalRes, setShowFinalRes] = useState(false);
  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [overalRes, setOveralRes] = useState("");
  const [loading, setLoading] = useState(false);

  const componentClicked = (response) => {};

  const responseFacebook = (response) => {
    let posts = [];
    let positive = 0;
    let totalResp = 0;
    setLoading(true);
    axios
      .get(
        "https://graph.facebook.com/v15.0/" +
          response.id +
          "/posts?access_token=" +
          response.accessToken
      )
      .then(async (res) => {
        totalResp = res.data.data.length;
        for (let i = 0; i < totalResp; i++) {
          let element = res.data.data[i];
          if (element.message != null) {
            console.log(element.message);
            const response = await axios.post(
              "http://127.0.0.1:8000/text/",
              "",
              {
                params: {
                  message: element.message,
                },
                headers: {
                  accept: "application/json",
                  "content-type": "application/x-www-form-urlencoded",
                },
              }
            );
            posts.push({
              post: element.message,
              result: response.data,
            });
            if (response.data === "positive") {
              positive++;
            }
          }
        }
        setPosters(posts);
        setLoading(false);
        let avg = positive / totalResp;
        setAverage(avg);
        if (avg >= 0.5) {
          setOveralRes("Normal");
        } else {
          setOveralRes("Moderate");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveOveralResult = (e) => {
    axios
      .post("http://localhost:8070/history/add", {
        result: overalRes,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err);
      });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (!user) {
      navigate("/login");
    }
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
                    {showFinalRes ? (
                      <div className="d-flex flex-row">
                        <h1
                          className="mr-2 text-light"
                          onClick={() => setShowFinalRes(false)}
                        >
                          <i class="bx bx-left-arrow-circle"></i>
                        </h1>
                        <h1 className="display-3 text-white">
                          Analysis Result
                        </h1>
                      </div>
                    ) : (
                      <h1 className="display-3 text-white">
                        Face Book Analysis
                      </h1>
                    )}
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
          {showFinalRes ? (
            <OnTimeSessionResult average={average} />
          ) : (
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col>
                      <Card className="card-lift--hover shadow border-0">
                        {loading ? (
                          <div className="justify-content-center my-5">
                            <Loading />
                          </div>
                        ) : (
                          <CardBody className="py-5">
                            <Form className="">
                              <FormGroup>
                                <Label>Face Book ID</Label>
                                <div className="d-flex justify-content-between">
                                  {" "}
                                  <Input
                                    id="exampleEmail"
                                    name="fb"
                                    placeholder="enter your face book ID"
                                    type="text"
                                    className="w-75"
                                    value={fbID}
                                    onChange={(e) => setFbID(e.target.value)}
                                  />
                                  <FacebookLogin
                                    appId={fbID}
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass="btn btn-primary"
                                    icon="fa-facebook pr-2"
                                  />
                                </div>
                              </FormGroup>{" "}
                            </Form>
                            {posters && posters.length > 0 ? (
                              <div>
                                <div className="mt-5 d-flex justify-content-between">
                                  <div className=" d-flex flex-row">
                                    <div className="d-flex flex-row">
                                      <div
                                        className="bg-success mr-3"
                                        style={{ width: 20, borderRadius: 4 }}
                                      />
                                      <Badge color="success">
                                        Positive visons
                                      </Badge>
                                    </div>
                                    <div className="d-flex flex-row ml-5">
                                      <div
                                        className="bg-danger mr-3"
                                        style={{ width: 20, borderRadius: 4 }}
                                      />
                                      <Badge color="danger">
                                        worthlessness, hoplessness or guilt
                                        visons
                                      </Badge>
                                    </div>
                                  </div>
                                  <div
                                    className=""
                                    onClick={() => {
                                      if (posters && posters.length > 0) {
                                        setShowFinalRes(true);
                                        saveOveralResult();
                                      }
                                    }}
                                  >
                                    <Link className="">
                                      Show Final Resulet{" "}
                                      <i className="bx bx-chevrons-right bx-fade-left ml-2"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="mt-5">
                                  <div>
                                    <Table size="sm">
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>Captions</th>
                                          <th>Results</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {posters.map((element, index) => (
                                          <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{element.post}</td>
                                            <td>
                                              {element.result === "positive" ? (
                                                <Badge color="success">
                                                  POSITIVE
                                                </Badge>
                                              ) : (
                                                <Badge color="danger">
                                                  NEGITIVE
                                                </Badge>
                                              )}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="text-center mt-5">
                                Please click the button to get Face Book
                                Analysis
                              </div>
                            )}
                          </CardBody>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          )}
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default FaceBookAnalysis;
