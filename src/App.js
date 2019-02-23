import React, { Component } from "react";
import ImportCSV from "./components/ImportCSV";
import parseAnalytics from "./utils/parseAnalytics";
import NavBar from "./components/NavBar";
import StatTable from "./components/stats/StatTable";

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

  render() {
    const { fields, stats } = this.state;

    return (
      <div>
        <NavBar />
        <ImportCSV 
          onData={this.handleAnalytics}
        />
        <b>Note:</b> your file is <strong>NOT</strong> uploaded to any server.
        {stats && <StatTable fields={fields} stats={stats}/>}
      </div>
    );
  }
}

export default App;
