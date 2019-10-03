import React from "react";
import { Statistic, Header, Icon, Popup } from "semantic-ui-react";

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
    estimatedRevenues,
    dailyEstimatedRevenues,
    growth,
    downloadDailyAverage,
    uniqueness,
  } = summary;

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
            <Statistic.Value>${estimatedRevenues[0].toFixed(2)} USD</Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1pts to $0.05 USD rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>${dailyEstimatedRevenues[0].toFixed(2)} USD</Statistic.Value>
            <Statistic.Label>
              Daily estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 1pts to $0.05 USD rate"}
              />
            </Statistic.Label>
            </Statistic>
            <Statistic>
            <Statistic.Value>£{estimatedRevenues[1].toFixed(2)} GBP</Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 123pts to £5.00 GBP rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>£{dailyEstimatedRevenues[1].toFixed(2)} GBP</Statistic.Value>
            <Statistic.Label>
              Daily estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 123pts to £5.00 GBP rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>€{estimatedRevenues[2].toFixed(2)} EUR</Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 219pts to €10 EUR rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>€{dailyEstimatedRevenues[2].toFixed(2)} EUR</Statistic.Value>
            <Statistic.Label>
              Daily estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 219pts to €10 EUR rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>${estimatedRevenues[3].toFixed(2)} CAD</Statistic.Value>
            <Statistic.Label>
              Estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 7pts to $5.00 CAD rate"}
              />
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>${dailyEstimatedRevenues[3].toFixed(2)} CAD</Statistic.Value>
            <Statistic.Label>
              Daily estimated revenues
              <Popup
                trigger={<Icon name="question circle" />}
                content={"Calculated on a 76pts to $5.00 CAD rate"}
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
