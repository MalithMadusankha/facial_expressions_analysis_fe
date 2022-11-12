import React, { useState, useEffect } from "react";
import { Table, Badge } from "reactstrap";
import { default as axios } from "axios";

function SocialMediaTable() {
  const [results, setResults] = useState([]);
  const getSocialMediaHistory = () => {
    axios.get("http://localhost:8070/history/").then((res) => {
      const resDB = res.data;
      setResults(resDB);
      console.log(resDB);
    });
  };

  useEffect(() => {
    getSocialMediaHistory();
  }, []);

  return (
    <div>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Results</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={index}>
              <th scope="row">{index + 1} </th>
              <td>
                {res.result === "Moderate" ? (
                  <Badge color="warning">MODERRATE</Badge>
                ) : (
                  <Badge color="info">NORMAL</Badge>
                )}
              </td>
              <td>{res.date.toString().slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SocialMediaTable;
