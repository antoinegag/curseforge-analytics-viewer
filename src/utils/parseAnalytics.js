export default function parseAnalytics(analytics) {
  const fileData = [...analytics];
    const fields = fileData[0];
    fields.splice(1, 2);
    fileData.shift(); // Don't want the headers
    fileData.pop(); // Remove mystery empty entry

    const stats = [];

    fileData.forEach(record => {
      const statsLine = {
          date: record[0],
          // id: record[1],
          // name: record[2],
          points: parseFloat(record[3]),
          historicalDownload: record[4],
          dailyDownload: record[5],
          dailyUniqueDownload: record[6],
          dailyTwitchAppDownload: record[7],
          dailyCurseForgeDownload: record[8],
      };
      stats.push(statsLine);
    });

    return {
      fields,
      stats
    }
}