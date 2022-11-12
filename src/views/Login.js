import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Logo from "../assets/img/brand/white.png";

const axios = require("axios").default;

function Login() {
  const [welcome, setWelcome] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorMsg("* please fill all fields");
    } else {
      axios
        .post("http://localhost:3003/api/users/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          const status = response.data.Status;
          const message = response.data.Message;
          if (status === "Successful") {
            const data = response.data.User;
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/landing");
          } else {
            setErrorMsg(message);
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg(err);
        });
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    setTimeout(() => {
      setWelcome(false);
    }, 3000);
  }, []);

  return (
    <>
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="mt--6">
            <div className="">
              <img src={Logo} alt="logo" width="200" />
            </div>

            <Row className="justify-content-center">
              <Col lg="5">
                {welcome ? (
                  <Card className="bg-transparent mt-5">
                    <CardBody>
                      <img src={Logo} style={{ width: 300 }} alt="logo" />
                      <h4 className="my-5 text-center text-white">
                        Welcome iDep !!!
                      </h4>
                    </CardBody>
                  </Card>
                ) : (
                  <>
                    <Card className="bg-secondary shadow border-0">
                      <div className="text-muted text-center mt-5">
                        <h4>Sign In </h4>
                      </div>
                      <CardBody className="px-lg-4 py-lg-4">
                        <small className="text-center text-danger">
                          {errorMsg}
                        </small>
                        <Form onSubmit={onSubmit} role="form">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                            />
                          </div>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              type="submit"
                            >
                              Sign in
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                    <Row className="mt-3">
                      <Col className="text-center">
                        <Link className="text-light" to="/register">
                          <small>Create new account</small>
                        </Link>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}

          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
