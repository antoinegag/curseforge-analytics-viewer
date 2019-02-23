import React from "react";
import { Table } from 'semantic-ui-react'

class StatTable extends React.Component {

  render() {
    const { fields, stats } = this.props;

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            {fields.map(field => <Table.HeaderCell>{field}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {stats.map((stat) => 
            <Table.Row>
              {Object.entries(stat).map(entry => <Table.Cell>{entry[1]}</Table.Cell>)}
            </Table.Row>
          )}         
        </Table.Body>
      </Table>
    );
  }
}

export default StatTable;