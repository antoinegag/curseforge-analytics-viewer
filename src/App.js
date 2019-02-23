import React, { Component } from "react";
import ImportCSV from "./components/ImportCSV";
import parseAnalytics from "./utils/parseAnalytics";
import NavBar from "./components/NavBar";
import StatTable from "./components/stats/StatTable";
import Plots from "./components/stats/Plots";
import { Header, Icon } from "semantic-ui-react";

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
    const { fields, stats } = this.state;

    return (
      <div style={{textAlign: "center"}}>
        <Header><Icon name="chart line"/>Your stats</Header>
        <Plots fields={fields} stats={stats}/>
        <Header><Icon name="database" />Raw data</Header>
        <StatTable fields={fields} stats={stats}/>
      </div>
    )
  }

  render() {
    const { stats } = this.state;

    return (
      <div>
        <NavBar />
        <ImportCSV 
          onData={this.handleAnalytics}
        />
        <b>Note:</b> your file is <strong>NOT</strong> uploaded to any server.
        {stats && this.renderAnalytics()}
      </div>
    );
  }
}

export default App;
