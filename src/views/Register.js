import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { default as axios } from "axios";

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

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const createNewUser = (event) => {
    // alert("form");
    event.preventDefault();
    if (email === "" || password === "") {
      setErrorMsg("Please Fill all Required Fields");
    } else {
      if (password === confirmPassword) {
        setErrorMsg("");
        axios
          .post("http://localhost:3003/api/users/addUser", {
            email: email,
            password: password,
            fullName: fullName,
            address: address,
            contactNo: contactNo,
          })
          .then((response) => {
            const status = response.data.Status;
            const message = response.data.Message;
            if (status === "Successful") {
              const data = response.data.User;
              console.log(data);
              localStorage.setItem("user", JSON.stringify(data));
              navigate("/");
            } else {
              setErrorMsg(message);
            }
          })
          .catch((err) => {
            console.log(err);
            setErrorMsg(err);
          });
      } else {
        setErrorMsg("Passwords are not matching");
      }
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
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
                <Card className="bg-secondary shadow border-0">
                  <div className="text-muted text-center mt-5">
                    <h4>Create New Account </h4>
                  </div>
                  <CardBody className="px-lg-4 py-lg-4">
                    <small className="text-danger">{errorMsg}</small>
                    <Form role="form" onSubmit={createNewUser}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter full name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter contact number"
                            type="text"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
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
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Re-Enter Password"
                            type="password"
                            autoComplete="off"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-center">
                <Link className="text-light" to="/login">
                  <small>Sign In</small>
                </Link>
              </Col>
            </Row>
          </Container>
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

export default Register;
