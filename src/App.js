import React, { Component } from "react";
import ImportCSV from "./components/ImportCSV";
import parseAnalytics from "./utils/parseAnalytics";
import NavBar from "./components/NavBar";
import StatTable from "./components/stats/StatTable";
import Plots from "./components/stats/Plots";
import { Header, Icon, Container, Divider } from "semantic-ui-react";
import Summary from "./components/stats/Summary";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fields: null,
      stats: null,
    }

    this.handleAnalytics = this.handleAnalytics.bind(this);
  }
  
  handleAnalytics(data) {
    this.setState({
      ...parseAnalytics(data.data),
    })
  }

  renderAnalytics() {
    const { project, fields, stats } = this.state;
    const range = {
      start: stats[0].date,
      end: stats[stats.length - 1].date,
    }
    return (
      <div style={{ marginLeft: "1rem", marginRight: "1rem"}}>
        <Header as="h2">
          <Icon name="chart line"/>
          <Header.Content>
            {project.name}
            <Header.Subheader>ID {project.id}</Header.Subheader>
          </Header.Content>
        </Header>
        <Header as="h3">
          <Icon name="calendar alternate outline"/>
          {range.start} to {range.end} ({stats.length - 1} days)
        </Header>
        <Divider />
        <Summary project={project} fields={fields} stats={stats} />
        <Plots fields={fields} stats={stats}/>
        <Header as="h2"><Icon name="database" />Raw data</Header>
        <StatTable fields={fields} stats={stats}/>
      </div>
    )
  }

  render() {
    const { stats } = this.state;

    return (
      <div>
        <NavBar />
        <Container textAlign="center">
          <ImportCSV 
            onData={this.handleAnalytics}
          />
          <b>Note:</b> your file is <strong>NOT</strong> uploaded to any server.
        </Container>
        {stats && this.renderAnalytics()}
      </div>
    );
  }
}

export default App;
