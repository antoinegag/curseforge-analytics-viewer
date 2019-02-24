import React from "react";
import Plot from "react-plotly.js"

class Plots extends React.Component {
  renderPlot(title, days, values, color) {
    return (
      <div className="plot-container">
        <Plot
          useResizeHandler
          data={[
            {
              x: days,
              y: values,
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: color || 'red' },
            },
          ]}
          layout={{ title: title, autosize: true }} 
        />
      </div>
    ); 
  }

  renderDailyPoints(days) {
    const { stats } = this.props;
    return this.renderPlot("Daily points", days, stats.map(entry => entry.points));
  }

  renderDownloads(days) {
    const { stats } = this.props;

    return (
      <div className="plot-container">
        <Plot
          useResizeHandler
          data={[
            {
              x: days,
              y: stats.map(entry => entry.dailyCurseForgeDownload),
              name: "Daily CurseForge Download",
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: 'orange' },
              stackgroup: 'one'
            },
            {
              x: days,
              y: stats.map(entry => entry.dailyTwitchAppDownload),
              name: "Daily Twitch App Download",
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: 'purple' },
              stackgroup: 'one'
            },
            {
              x: days,
              y: stats.map(entry => entry.dailyUniqueDownload),
              name: "Unique downloads",
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: 'red' },
            },
            {
              x: days,
              y: stats.map(entry => entry.dailyDownload),
              name: "Daily downloads",
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: 'green' },
            },
          ]}
          layout={{ title: "Downloads", autosize: true }} 
        />
      </div>
    ); 
  }

  renderHistoricalDownload(days) {
    const { stats } = this.props;
    return this.renderPlot("Historical Download", days, stats.map(entry => entry.historicalDownload), "red");
  }

  render() {
    const { stats } = this.props;
    const days = stats.map(entry => entry.date);

    return (
      <div>
        {this.renderDailyPoints(days)}
        {this.renderDownloads(days)}
        {this.renderHistoricalDownload(days)}
      </div>
    )
  }
}

export default Plots;