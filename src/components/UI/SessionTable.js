import React, { useState, useEffect } from "react";
import { Table, Badge } from "reactstrap";
import { default as axios } from "axios";

function SessionTable() {
  const [sessionHistory, setSessionHistory] = useState([]);

  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user);

  const getSessionHistory = () => {
    axios
      .post(
        "http://localhost:3003/api/sessionAnswers/getSessionResultsOfUser",
        { userId: userParsed._id }
      )
      .then((response2) => {
        const res2 = response2.data.SessionsResults;

        let sessionResults = [];
        for (let i = 0; i < res2.length; i++) {
          sessionResults.push(res2[i]);
        }
        setSessionHistory(sessionResults);
      });
  };

  useEffect(() => {
    getSessionHistory();
  }, []);

  return (
    <div>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Session Number</th>
            <th>Results</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sessionHistory.map((element, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>SES00{index + 1}</td>
              <td>
                {element.videos[0]?.videoResult === "Negative" ? (
                  <Badge color="success">LOW</Badge>
                ) : element.videos[0]?.videoResult === "Positive" ? (
                  <Badge color="warning">MEDIUM</Badge>
                ) : (
                  <Badge color="danger">HIGH</Badge>
                )}
              </td>
              <td>
                {element.date ? element.date.toString().slice(0, 10) : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SessionTable;
