import React from "react";
import { Table, Badge } from "reactstrap";

function CaptionsTable() {
  return (
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
          <tr>
            <th scope="row">1</th>
            <td>01</td>
            <td>
              <Badge color="success">POSITIVE</Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02</td>
            <td>
              <Badge color="danger">NEGATIVE</Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>03</td>
            <td>
              <Badge color="success">POSITIVE</Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CaptionsTable;
