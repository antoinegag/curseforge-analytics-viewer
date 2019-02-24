export default function parseAnalytics(analytics) {
  const fileData = [...analytics];
    const fields = fileData[0];
    fields.splice(1, 2);
    fileData.shift(); // Don't want the headers
    fileData.pop(); // Remove mystery empty entry

    const stats = [];
    const project = {
      name: fileData[1][2],
      id: fileData[1][1],
    }

    fileData.forEach(record => {
      const statsLine = {
          date: record[0],
          // id: record[1],
          // name: record[2],
          points: parseFloat(record[3]),
          historicalDownload: parseInt(record[4]),
          dailyDownload: parseInt(record[5]),
          dailyUniqueDownload: parseInt(record[6]),
          dailyTwitchAppDownload: parseInt(record[7]),
          dailyCurseForgeDownload: parseInt(record[8]),
      };
      stats.push(statsLine);
    });

    return {
      project,
      fields,
      stats
    }
}