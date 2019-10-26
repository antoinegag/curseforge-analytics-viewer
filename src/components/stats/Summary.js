import React, { useState } from "react";
import { Statistic, Header, Icon, Popup, Dropdown } from "semantic-ui-react";

const Summary = ({ analytics }) => {
  const { project, fields, stats, summary } = analytics;
  const fixedTwo = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  const noDigits = {
    maximumFractionDigits: 0,
  }

  const {
    pointSum,
    downloadSum,
    uniqueDownloadSum,
    cursePercentage,
    twitchPercentage,
    curseDownloadSum,
    twitchDownloadSum,
    pointDailyAverage,
    growth,
    downloadDailyAverage,
    uniqueness,
  } = summary;

  const PTS_USD_RATE = 0.05;
  const PTS_GBP_RATE = 5/123;
  const PTS_EUR_RATE = 10/219;
  const PTS_CAD_RATE = 5/76;

  const totalEstimatedOptions = [
    {key: "USD", text: "$" + (pointSum * PTS_USD_RATE).toFixed(2), value: "USD"},
    {key: "GBP", text: "£" + (pointSum * PTS_GBP_RATE).toFixed(2), value: "GBP"},
    {key: "EUR", text: "€" + (pointSum * PTS_EUR_RATE).toFixed(2), value: "EUR"},
    {key: "CAD", text: "$" + (pointSum * PTS_CAD_RATE).toFixed(2), value: "CAD"}
  ];
  const dailyEstimatedOptions = [
    {key: "USD", text: "$" + (pointDailyAverage * PTS_USD_RATE).toFixed(2), value: "USD"},
    {key: "GBP", text: "£" + (pointDailyAverage * PTS_GBP_RATE).toFixed(2), value: "GBP"},
    {key: "EUR", text: "€" + (pointDailyAverage * PTS_EUR_RATE).toFixed(2), value: "EUR"},
    {key: "CAD", text: "$" + (pointDailyAverage * PTS_CAD_RATE).toFixed(2), value: "CAD"}
  ];

  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (e,d) => {
    setCurrency(d.value)
  }

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
            <Statistic.Value>
              <Dropdown upward floating inline options={totalEstimatedOptions} value={currency} onChange={changeCurrency}/>
            </Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1pts to $0.05 USD rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Dropdown upward floating inline options={dailyEstimatedOptions} value={currency} onChange={changeCurrency}/>
            </Statistic.Value>
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
