import { Serie } from "@nivo/line";
import React from "react";
import Points from "./charts/Points";

interface Props {
  stats: unknown[];
}

export default function Trend({ stats }: Props) {
  // TODO: fix typing
  const days = stats.map((entry) => (entry as any).date);
  console.log(days);

  const data = [
    {
      id: "Points",
      color: "hsl(164, 70%, 50%)",
      data: stats.map((entry) => ({
        x: (entry as any).date,
        y: (entry as any).points,
      })),
    },
  ] as Serie[];

  console.log(data);

  return (
    <div className="flex flex-col">
      Trends
      <div className="h-full flex-grow">
        <Points data={data} />
      </div>
    </div>
  );
}
