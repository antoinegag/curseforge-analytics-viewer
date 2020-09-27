import { Serie } from "@nivo/line";
import React from "react";
import { StatsLine } from "../../helpers/AnalyticsParser";
import TimeLineChart, { ValueRendererProps } from "./TimeLineChart";
import classNames from "classnames";

interface Props {
  title: string;
  stats: StatsLine[];
  field: keyof StatsLine;
  color?: string;
  className?: string;
  ValueRenderer?: React.ComponentType<ValueRendererProps>;
}

export default function Trend({
  title,
  stats,
  field,
  className,
  color = "#DD5F18",
  ValueRenderer,
}: Props) {
  const data = [
    {
      id: title,
      color,
      data: stats.map((entry) => ({
        x: entry.date,
        y: entry[field],
      })),
    },
  ] as Serie[];

  return (
    <div className={classNames("flex flex-col", className)}>
      <h3>{title}</h3>
      <div className="h-full flex-grow">
        <TimeLineChart
          data={data}
          ValueRenderer={ValueRenderer}
          color={color}
        />
      </div>
    </div>
  );
}
