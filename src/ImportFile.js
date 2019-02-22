import React from "react";
import Papa from "papaparse";
import { Line } from "react-chartjs"

class ImportFromFile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stats: null
    }

    this.fileReader = new FileReader();

    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  handleData(data) {
    console.log(data);
    const fileData = [...data.data];
    const headers = fileData[0].filter(header => header !== "Project ID" && header !== "Name");
    fileData.shift(); // Don't want the headers
    fileData.pop(); // Remove mystery empty entry

    const stats = [];

    fileData.forEach(record => {
      const statsLine = {
          date: record[0],
          // id: record[1],
          // name: record[2],
          points: parseFloat(record[3]),
          historicalDownload: record[4],
          dailyDownload: record[5],
          dailyUniqueDownload: record[6],
          dailyTwitchAppDownload: record[7],
          dailyCurseForgeDownload: record[8],
      };
      stats.push(statsLine);
    });

    this.setState({stats, headers});
  }

  handleFileRead(e) {
    const content = e.currentTarget.result;

    let data;
    Papa.parse(content, {
      complete: (result) => data = result
    });
    this.handleData(data);
  }

  handleFileChosen(file) {
    const fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  }

  renderStats() {
    const { stats, headers } = this.state;

    return (
      <div>
        <table>
          <tr>
            {headers.map(header => <th>{header}</th>)}
          </tr>
        {stats.map((stat) => 
          <tr>
            {Object.entries(stat).map(entry => <td>{entry[1]}</td>)}
          </tr>
        )}
        </table>
      </div>
    )
  }

  render() {
    const { stats } = this.state;

    return (
      <div>
        <input type='file'
          id='file'
          className='input-file'
          accept='.csv'
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
        {stats && this.renderStats()}
      </div>
    );
  }
};

export default ImportFromFile;