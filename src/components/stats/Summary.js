import React, { useState, useEffect } from "react";
import {
  Statistic,
  Header,
  Icon,
  Popup,
  Dropdown,
  Loader
} from "semantic-ui-react";
import useExchangeRates from "../../hooks/useExchangeRates";

const Summary = ({ analytics }) => {
  const { project, fields, stats, summary } = analytics;
  const fixedTwo = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  const noDigits = {
    maximumFractionDigits: 0
  };

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
    uniqueness
  } = summary;

  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (e, d) => {
    setCurrency(d.value);
  };

  const PTS_USD_RATE = 0.05;

  const totalPointUSD = pointSum * PTS_USD_RATE;
  const dailyPointUSD = pointDailyAverage * PTS_USD_RATE;

  const rates = useExchangeRates();
  const currencyOptions = Object.keys(rates).map(rate => ({
    value: rate,
    text: rate
  }));

  const totalPoints = totalPointUSD * rates[currency];
  const dailyPoints = dailyPointUSD * rates[currency];

  return (
    <div>
      <div>
        <Header as="h2">Points</Header>
        <div>
          Currency :{" "}
          <Dropdown
            options={currencyOptions}
            onChange={changeCurrency}
            defaultValue="USD"
          />
        </div>
        <Statistic.Group size="tiny">
          <Statistic>
            <Statistic.Value>{pointSum.toLocaleString()} pts</Statistic.Value>
            <Statistic.Label>Total</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {pointDailyAverage.toLocaleString(undefined, fixedTwo)} pts
            </Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {isNaN(totalPoints) ? <Loader /> : totalPoints.toFixed(2)}{" "}
              {currency}
            </Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1 pts to $0.05 USD rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {isNaN(dailyPoints) ? <Loader /> : dailyPoints.toFixed(2)}{" "}
              {currency}
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
            <Statistic.Value>
              {downloadDailyAverage.toLocaleString(undefined, noDigits)}
            </Statistic.Value>
            <Statistic.Label>Daily average</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {uniqueDownloadSum.toLocaleString()}
            </Statistic.Value>
            <Statistic.Label>Total unique</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{uniqueness.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>Uniqueness</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{growth.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>
              <Icon name="rocket" />
              Growth
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group size="tiny">
          <Statistic color="purple">
            <Statistic.Value>{twitchPercentage.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>
              from Twitch App
              <Icon name="twitch" />
            </Statistic.Label>
          </Statistic>
          <Statistic color="orange">
            <Statistic.Value>{cursePercentage.toFixed(1)}%</Statistic.Value>
            <Statistic.Label>
              from Curse
              <Icon name="fire" />
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default Summary;
