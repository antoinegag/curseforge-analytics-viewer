import React from "react";
import { ResponsiveLine, Serie } from "@nivo/line";

interface Props {
  data: Serie[];
  height?: number;
}
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Test({ data /* see data tab */, height }: Props) {
  return (
    <div style={{ height: height || 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          useUTC: false,
          format: "%Y-%m-%d",
          precision: "month",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
        tooltip={({ point }) => {
          const date = point.data.x as Date;
          return (
            <div className="bg-gray-100 p-2 border border-gray-500">
              <div>
                {`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}
              </div>
              <div>
                {point.data.y} (
                {`${(parseFloat(point.data.y as string) * 0.05).toFixed(2)}`}{" "}
                USD)
              </div>
            </div>
          );
        }}
        curve="stepBefore"
        enablePoints={false}
        enableGridX={false}
        axisBottom={{
          format: (value) => {
            const date = value as Date;
            return `${date.getFullYear()}/${date.getMonth() + 1}`;
          },
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Daily points",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointColor={{ theme: "background" }}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
      />
    </div>
  );
}
