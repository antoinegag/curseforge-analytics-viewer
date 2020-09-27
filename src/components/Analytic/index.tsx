import React from "react";
import { Analytics } from "../../helpers/AnalyticsParser";
import Trend from "../charts/Trend";

interface Props {
  analytics: Analytics;
}

export default function Analytic({ analytics }: Props) {
  const { stats, project, fields, summary } = analytics;
  return (
    <div>
      <div className="text-center">
        <h2>
          <span className="font-semibold">{project.name}</span>
        </h2>
        <div>
          <span className="font-bold">{stats[0].date}</span> to{" "}
          <span className="font-bold">{stats[stats.length - 1].date}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-center text-lg flex items-center justify-center lg:w-3/4 mx-auto flex-wrap">
          <div className="w-1/2 md:w-1/3 lg:w-1/5">
            <div className="font-bold text-2xl">
              {summary.growth.toFixed(0)}%
            </div>
            Download growth
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/5">
            <div className="font-bold text-2xl">
              {summary.downloadDailyAverage.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
            Daily downloads avg.
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/5">
            <div>
              <div className="font-bold">{summary.pointSum.toFixed(2)}</div>(
              <span className="font-bold">
                ${(summary.pointSum * 0.05).toFixed(2)} USD
              </span>
              )
            </div>
            Points earned
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/5">
            <div className="font-bold text-2xl">
              {summary.pointDailyAverage.toFixed(2)}
            </div>
            <div>
              (
              <span className="font-bold">
                ${(summary.pointDailyAverage * 0.05).toFixed(2)} USD
              </span>
              )
            </div>
            Daily points avg.
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/5">
            <div className="font-bold text-2xl">{stats.length} days</div>
            Period
          </div>
        </div>
      </div>
      <Trend
        stats={analytics.stats}
        field="points"
        title="Daily points"
        className="mb-6"
        ValueRenderer={({ value }) => {
          return (
            <>
              {value} ({`${(parseFloat(value as string) * 0.05).toFixed(2)}`}{" "}
              USD)
            </>
          );
        }}
      />
      <Trend
        stats={analytics.stats}
        field="dailyDownload"
        title="Daily downloads"
        className="mb-6"
      />
      <Trend
        stats={analytics.stats}
        field="historicalDownload"
        title="Downloads over time"
        className="mb-6"
      />
    </div>
  );
}
