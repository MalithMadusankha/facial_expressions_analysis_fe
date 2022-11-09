import React from "react";
import { Table, Badge } from "reactstrap";

function SessionTable() {
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
          <tr>
            <th scope="row">1</th>
            <td>Session - 01</td>
            <td>
              <Badge color="warning">MEDIUM</Badge>
            </td>
            <td>22-10-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Session - 02</td>
            <td>
              <Badge color="info">LOW</Badge>
            </td>
            <td>20-10-2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Session - 03</td>
            <td>
              <Badge color="danger">HIGH</Badge>
            </td>
            <td>25-10-2022</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SessionTable;
