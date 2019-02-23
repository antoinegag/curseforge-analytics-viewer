import React from "react";
import Papa from "papaparse";
import { Input, Label } from "semantic-ui-react";

class ImportCSV extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stats: null
    }

    this.fileReader = new FileReader();

    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  handleFileRead(e) {
    const content = e.currentTarget.result;

    let data;
    Papa.parse(content, {
      complete: (result) => data = result
    });
    this.props.onData(data);
  }

  handleFileChosen(file) {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  }

  render() {
    return (
      <div className="mt-1">
        <Label pointing="below">Find analytics data at <a href="//minecraft.curseforge.com/dashboard/projects">https://minecraft.curseforge.com/dashboard/projects</a></Label><br/>
        <Input type='file'
          id='file'
          className='input-file'
          accept='.csv'
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
};

export default ImportCSV;