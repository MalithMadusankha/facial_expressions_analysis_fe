import React, { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import fixWebmDuration from "webm-duration-fix";
import { useNavigate } from "react-router-dom";
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

import Loading from "components/UI/Loading";
import FinalResult from "./FinalResult";
import ErrorAlert from "components/UI/ErrorAlert";

const axios = require("axios").default;
function OnTimeSession() {
  const querstions = [
    "Are you feel sad all times?",
    "Do you feel discourage about the future?",
    "Do you feel you have failed more than the average person?",
    "Did you satisfied about your past things?",
    // "Are you feeling guilty?",
    // "Do you feel Guilty all the time or peculiar times?",
    // "Do you feel disappointed in your life?",
    // "Are you blaming yourself about yourself?",
  ];

  const naviagate = useNavigate();

  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user);
  const session = "626f983b1e9a9f3964b46830";

  const [videos, setVideos] = useState([]);
  const [blobUrls, setBlobUrls] = useState([]);
  const [selectedRecordedVideo, setSelectedRecordedVideo] = useState("");
  const [videoResult, setVideoResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  /*eslint-disable*/
  const [answer, setAnswer] = useState([]);

  const answerSubmit = async (e) => {
    e.preventDefault();
    if (videos.length === 0) {
      console.log("There are no recordings.");
    } else {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      setIsLoading(true);
      setIsError(false);
      const formData = new FormData();
      formData.append("user", userParsed._id);
      formData.append("session", session);
      formData.append("videos", videos[0]);
      for (let i = 0; i < videos.length; i++) {
        formData.append("videos", videos[i]);
      }
      axios
        .post(
          "http://localhost:3003/api/sessionAnswers/addSessionAnswer",
          formData
        )
        .then((response) => {
          console.log(response.data);
          setVideoResult(response.data);
          setIsLoading(false);
          setIsError(false);
          setIsSuccess(true);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    if (!user) {
      naviagate("/login");
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
                  <Col>
                    <div>
                      {isSuccess ? (
                        <div className="d-flex flex-row">
                          <h1
                            className="mr-2 text-light"
                            onClick={() => setIsSuccess(false)}
                          >
                            <i class="bx bx-left-arrow-circle"></i>
                          </h1>{" "}
                          <h1 className="display-3 text-white">
                            Session Result
                          </h1>
                        </div>
                      ) : (
                        <h1 className="display-3 text-white">
                          On Time Session
                        </h1>
                      )}
                    </div>
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
          {isSuccess ? (
            <div>
              <FinalResult videoResult={videoResult} />
            </div>
          ) : (
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col>
                      <Card className="shadow border-0">
                        {isLoading ? (
                          <div className="justify-content-center my-5">
                            <Loading />
                          </div>
                        ) : isError ? (
                          <div className="justify-content-center mb-5">
                            <ErrorAlert />
                          </div>
                        ) : (
                          <CardBody className="py-5">
                            <Label>Questions</Label>

                            <div className="mt-3">
                              <div>
                                <Table size="sm">
                                  <tbody>
                                    {querstions.map((que, index) => (
                                      <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{que}</td>
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
                                  <ReactMediaRecorder
                                    video
                                    render={({
                                      status,
                                      startRecording,
                                      stopRecording,
                                      mediaBlobUrl,
                                    }) => (
                                      <div className="">
                                        <video
                                          src={mediaBlobUrl}
                                          controls
                                          width="250px"
                                        />
                                        <div className="mt-2">
                                          <div className="d-flex flex-row">
                                            <button
                                              className="btn btn-primary btn-sm me-1 px-2 mx-2"
                                              onClick={startRecording}
                                            >
                                              <i
                                                className="feather-lg"
                                                data-feather="play"
                                              ></i>{" "}
                                              <span className="align-middle">
                                                {" "}
                                                Start
                                              </span>
                                            </button>

                                            <button
                                              className="btn btn-danger border btn-sm px-2 mx-2"
                                              onClick={stopRecording}
                                            >
                                              <i
                                                className="feather-lg"
                                                data-feather="pause"
                                              ></i>
                                              <span className="align-middle">
                                                {" "}
                                                Stop
                                              </span>{" "}
                                            </button>
                                            {status === "recording" ? (
                                              <div>
                                                <i class="bx bx-video-recording bx-burst display-5 text-danger"></i>
                                              </div>
                                            ) : status === "stopped" ? (
                                              <div>
                                                <i class="bx bx-stop-circle bx-burst display-5 text-danger"></i>
                                              </div>
                                            ) : (
                                              <span className="text-primary">
                                                {status}
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    onStop={async (blobUrl, blob) => {
                                      console.log("Blob URL", blobUrl);
                                      const videoBlob = await fetch(
                                        blobUrl
                                      ).then((r) => r.blob());
                                      const fixBlob = await fixWebmDuration(
                                        blob
                                      );
                                      const videoFile = new File(
                                        [fixBlob],
                                        "data",
                                        { type: "video/webm" }
                                      );
                                      let videosCopy = [];
                                      let blobUrlsCopy = [];
                                      let que = [];
                                      let i = 0;
                                      for (; i < videos.length; i++) {
                                        videosCopy[i] = videos[i];
                                        blobUrlsCopy[i] = blobUrls[i];
                                        que[i] = answer[i];
                                      }
                                      videosCopy[i] = videoFile;
                                      blobUrlsCopy[i] = blobUrl;
                                      que[i] = `Question ${i + 1} is recorded`;
                                      setVideos(videosCopy);
                                      setBlobUrls(blobUrlsCopy);
                                      setSelectedRecordedVideo(blobUrl);
                                      setAnswer(que);
                                      console.log("videosCopy", videosCopy);
                                      console.log("blobUrlsCopy", blobUrlsCopy);
                                      console.log("que", que);
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Table size="sm">
                                    <tbody>
                                      {answer.map((que, index) => (
                                        <tr
                                          key={index}
                                          className="justify-content-center"
                                        >
                                          <td>{que}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                  <div className="text-center mt-5">
                                    <Button
                                      type="submit"
                                      onClick={answerSubmit}
                                      color="success"
                                    >
                                      Submite
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                            </div>
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

export default OnTimeSession;
