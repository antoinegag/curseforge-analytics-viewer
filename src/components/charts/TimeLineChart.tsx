import React from "react";
import { ResponsiveLine, Serie } from "@nivo/line";

interface Props {
  data: Serie[];
  height?: number;
  color?: string;
  axisNames?: { x?: string; y?: string };
  ValueRenderer?: React.ComponentType<ValueRendererProps>;
}

export interface ValueRendererProps {
  value: number | string | Date;
}

function DefaultValueRender({ value }: { value: unknown }) {
  if (typeof value === "number") {
    return <>{(value as number).toLocaleString()}</>;
  }
  return <>{value}</>;
}

export default function TimeLineChart({
  data,
  height = 400,
  color = "#DD5F18",
  ValueRenderer = DefaultValueRender,
  axisNames = { x: "x", y: "y" },
}: Props) {
  return (
    <div style={{ height: height }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          useUTC: false,
          format: "%Y-%m-%d",
          precision: "day",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
        tooltip={({ point }) => {
          const date = point.data.x as Date;
          return (
            <div className="bg-gray-100 border border-orange-600 rounded-lg bg-opacity-75 px-5 py-2">
              <div>
                Date:{" "}
                <span className="font-bold">{`${date.toLocaleDateString()}`}</span>
              </div>
              <div>
                {axisNames.y}:{" "}
                <span className="font-bold">
                  <ValueRenderer value={point.data.y} />
                </span>
              </div>
            </div>
          );
        }}
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
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={color}
        pointColor={{ theme: "background" }}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
      />
    </div>
  );
}
