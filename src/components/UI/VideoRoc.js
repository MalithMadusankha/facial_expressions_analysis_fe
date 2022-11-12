import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

const VideoRoc = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const [audioQuestion, setAudioQuestion] = useState(
    "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
  );

  const [isPlay, setIsPlay] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [audio, setAudio] = useState(false);

  const playAudio = () => {
    audioElm.current.play();
    setIsPlay(true);
    setAudio(true);
    handleStartCaptureClick();
  };

  const PlayNextQuestion = () => {
    setIsPlay(false);
    handleStopCaptureClick();
  };
  const audioElm = useRef();

  useEffect(() => {
    // if (isRecord) {
    //   handleStartCaptureClick();
    // } else {
    //   handleStopCaptureClick();
    // }
  }, []);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      {!isPlay ? (
        <div className="bg-dark" style={{ width: 250, height: 175 }}></div>
      ) : (
        <Webcam audio={true} ref={webcamRef} width="250px" />
      )}

      {/* {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
      <audio src={audioQuestion} ref={audioElm} />
      <div className="">
        <div className="mt-2">
          <div>
            <button
              className="btn btn-primary btn-sm me-1 px-2 mx-2"
              onClick={playAudio}
            >
              <i className="feather-lg" data-feather="play"></i>{" "}
              <span className="align-middle"> Start</span>
            </button>

            <button
              className="btn btn-danger border btn-sm px-2 mx-2"
              onClick={PlayNextQuestion}
            >
              <i className="feather-lg" data-feather="pause"></i>
              <span className="align-middle"> Stop</span>{" "}
            </button>
            {isPlay && (
              <span>
                <i className="bx bxs-music bx-burst fs-4 ms-2 text-primary"></i>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoRoc;
