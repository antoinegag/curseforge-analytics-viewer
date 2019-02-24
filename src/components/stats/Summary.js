import React from "react";
import { Statistic, Header } from "semantic-ui-react";

const Summary = ({ project, fields, stats }) => {

  let pointSum = 0;
  let downloadSum = 0;
  let curseDownloadSum = 0;
  let twitchDownloadSum = 0;

  for (let i = 0; i < stats.length; i++) {
    const record = stats[i];

    pointSum += record.points;
    downloadSum += record.dailyDownload;
    curseDownloadSum += record.dailyCurseForgeDownload;
    twitchDownloadSum += record.dailyTwitchAppDownload;
  }

  const growth = (downloadSum / stats[0].historicalDownload) * 100;
  const pointDailyAverage = pointSum / stats.length;
  const downloadDailyAverage = downloadSum / stats.length;
  const cursePercentage = ((curseDownloadSum / downloadSum) * 100);
  const twitchPercentage = ((twitchDownloadSum / downloadSum) * 100);

  return (
    <div>
      <div>
        <Header as="h2">Points</Header>
        <Statistic.Group size="tiny">
          <Statistic>
            <Statistic.Value>{pointSum.toFixed(2)}</Statistic.Value>
            <Statistic.Label>Total</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{pointDailyAverage.toFixed(2)}</Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
      <div className="mt-1">
        <Header as="h2">Downloads</Header>
        <Statistic.Group size="tiny">
          <Statistic>
            <Statistic.Value>{downloadSum}</Statistic.Value>
            <Statistic.Label>Total</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{downloadDailyAverage.toFixed(2)}</Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{growth.toFixed(2)}%</Statistic.Value>
            <Statistic.Label>Growth</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group size="tiny">
          <Statistic color="purple">
            <Statistic.Value>{twitchPercentage.toFixed(2)}%</Statistic.Value>
            <Statistic.Label>from Twitch App</Statistic.Label>
          </Statistic>
          <Statistic color="orange">
            <Statistic.Value>{cursePercentage.toFixed(2)}%</Statistic.Value>
            <Statistic.Label>from Curse</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default Summary;