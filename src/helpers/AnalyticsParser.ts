import Papa from "papaparse";

export function parseCSVFile(file: File) {
  return new Promise<Papa.ParseResult<unknown>>((resolve, reject) => {
    Papa.parse(file, {
      complete: (result) => {
        resolve(result);
      },
    });
  });
}

export interface StatsLine {
  date: string;
  points: number;
  historicalDownload: number;
  dailyDownload: number;
  dailyUniqueDownload: number;
  dailyTwitchAppDownload: number;
  dailyCurseForgeDownload: number;
}

export interface Analytics {
  project: {
    name: string;
    id: string;
  };
  fields: string[];
  stats: StatsLine[];
  summary: {
    curseDownloadSum: number;
    twitchDownloadSum: number;
    pointSum: number;
    downloadSum: number;
    uniqueDownloadSum: number;
    cursePercentage: number;
    twitchPercentage: number;
    pointDailyAverage: number;
    growth: number;
    downloadDailyAverage: number;
    uniqueness: number;
  };
}

export default function parseAnalytics(analytics: string[][]): Analytics {
  const fileData = [...analytics];
  const fields = fileData[0];
  fields.splice(1, 2);
  fileData.shift(); // Don't want the headers
  fileData.pop(); // Remove mystery empty entry

  const stats: StatsLine[] = [];
  const project = {
    name: fileData[1][2],
    id: fileData[1][1],
  };

  let pointSum = 0;
  let downloadSum = 0;
  let uniqueDownloadSum = 0;
  let curseDownloadSum = 0;
  let twitchDownloadSum = 0;

  fileData.forEach((record) => {
    const statsLine = {
      date: record[0],
      points: parseFloat(record[3]),
      historicalDownload: parseInt(record[4]),
      dailyDownload: parseInt(record[5]),
      dailyUniqueDownload: parseInt(record[6]),
      dailyTwitchAppDownload: parseInt(record[7]),
      dailyCurseForgeDownload: parseInt(record[8]),
    };

    pointSum += statsLine.points;
    downloadSum += statsLine.dailyDownload;
    uniqueDownloadSum += statsLine.dailyUniqueDownload;
    curseDownloadSum += statsLine.dailyCurseForgeDownload;
    twitchDownloadSum += statsLine.dailyTwitchAppDownload;

    stats.push(statsLine);
  });

  const pointDailyAverage = pointSum / stats.length;

  const summary = {
    curseDownloadSum,
    twitchDownloadSum,
    pointSum,
    downloadSum,
    uniqueDownloadSum,
    cursePercentage: (curseDownloadSum / downloadSum) * 100,
    twitchPercentage: (twitchDownloadSum / downloadSum) * 100,
    pointDailyAverage,
    growth: (downloadSum / stats[0].historicalDownload) * 100,
    downloadDailyAverage: downloadSum / stats.length,
    uniqueness: (uniqueDownloadSum / downloadSum) * 100,
  };

  return {
    project,
    fields,
    stats,
    summary,
  };
}
