import React from "react";
import { Table, Badge } from "reactstrap";

function SocialMediaTable() {
  return (
    <div>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Analyis Time</th>
            <th>Results</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>01</td>
            <td>
              <Badge color="warning">MODERRATE</Badge>
            </td>
            <td>22-10-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02</td>
            <td>
              <Badge color="info">NORMAL</Badge>
            </td>
            <td>20-10-2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>03</td>
            <td>
              <Badge color="warning">MODERRATE</Badge>
            </td>
            <td>25-10-2022</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SocialMediaTable;
