import React from "react";
import { Statistic, Header, Icon, Popup } from "semantic-ui-react";

const Summary = ({ project, fields, stats }) => {
  const fixedTwo = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  const noDigits = {
    maximumFractionDigits: 0,
  }

  let pointSum = 0;
  let downloadSum = 0;
  let uniqueDownloadSum = 0;
  let curseDownloadSum = 0;
  let twitchDownloadSum = 0;

  for (let i = 0; i < stats.length; i++) {
    const record = stats[i];

    pointSum += record.points;
    downloadSum += record.dailyDownload;
    uniqueDownloadSum += record.dailyUniqueDownload;
    curseDownloadSum += record.dailyCurseForgeDownload;
    twitchDownloadSum += record.dailyTwitchAppDownload;
  }

  const pointDailyAverage = pointSum / stats.length;
  const PTS_USD_RATE = 0.05;
  const estimatedRevenues = pointSum * PTS_USD_RATE;
  const dailyEstimatedRevenues = pointDailyAverage * PTS_USD_RATE;

  const growth = (downloadSum / stats[0].historicalDownload) * 100;
  const downloadDailyAverage = downloadSum / stats.length;
  const uniqueness = (uniqueDownloadSum / downloadSum) * 100;
  const cursePercentage = ((curseDownloadSum / downloadSum) * 100);
  const twitchPercentage = ((twitchDownloadSum / downloadSum) * 100);

  return (
    <div>
      <div>
        <Header as="h2">Points</Header>
        <Statistic.Group size="tiny">
          <Statistic>
            <Statistic.Value>{pointSum.toLocaleString()}</Statistic.Value>
            <Statistic.Label>Total</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{pointDailyAverage.toLocaleString(undefined, fixedTwo)}</Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>${estimatedRevenues.toFixed(2)} USD</Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1pts to $0.05 USD rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>${dailyEstimatedRevenues.toFixed(2)} USD</Statistic.Value>
            <Statistic.Label>
              Daily estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1pts to $0.05 USD rate"}
              />
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
      <div className="mt-1">
        <Header as="h2">Downloads</Header>
        <Statistic.Group size="tiny">
          <Statistic>
            <Statistic.Value>{downloadSum.toLocaleString()}</Statistic.Value>
            <Statistic.Label>
              <Icon name="download" />
              Total
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{downloadDailyAverage.toLocaleString(undefined, noDigits)}</Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{uniqueDownloadSum.toLocaleString()}</Statistic.Value>
            <Statistic.Label>Total unique</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{uniqueness.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>Uniqueness</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{growth.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>
              <Icon name="rocket"/>
              Growth
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group size="tiny">
          <Statistic color="purple">
            <Statistic.Value>{twitchPercentage.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>from Twitch App<Icon name="twitch"/></Statistic.Label>
          </Statistic>
          <Statistic color="orange">
            <Statistic.Value>{cursePercentage.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>from Curse<Icon name="fire"/></Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default Summary;