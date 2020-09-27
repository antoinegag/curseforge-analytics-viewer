import React, { useCallback, useState } from "react";
import classNames from "classnames";
import "./App.css";
import FileUpload from "./components/FileUpload";
import Title from "./components/Title";
import parseAnalytics, { parseCSVFile } from "./helpers/AnalyticsParser";
import Trend from "./components/Trend";

function App() {
  const handleUpload = useCallback(async (file: File) => {
    setLoading(true);
    const res = await parseCSVFile(file);
    const analytics = parseAnalytics(res.data as string[][]);

    setData(analytics);
    setLoading(false);
  }, []);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<unknown>();

  return (
    <div className="min-h-screen p-5 flex flex-col">
      <div className="lg:w-2/3 mx-5 lg:mx-auto">
        <Title />
        <hr className="my-5" />
      </div>
      {loading && <div>Loading</div>}
      {!loading && (
        <FileUpload
          className={classNames({ "flex-grow": !data })}
          onUpload={handleUpload}
        />
      )}
      {!loading && data && (
        <div>
          Report
          <Trend stats={(data as any).stats} />
        </div>
      )}
    </div>
  );
}

export default App;
