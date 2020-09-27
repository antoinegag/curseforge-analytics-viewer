import React, { useCallback, useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "classnames";
import "./App.css";
import FileUpload from "./components/FileUpload";
import Title from "./components/Title";
import parseAnalytics, {
  Analytics,
  parseCSVFile,
} from "./helpers/AnalyticsParser";
import Analytic from "./components/Analytic";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const lastImport = localStorage.getItem("lastImport");
      if (lastImport != null) {
        setData(JSON.parse(lastImport) as Analytics);
      }
    }
  }, []);

  const handleUpload = useCallback(async (file: File) => {
    setLoading(true);
    setFile(file);
    const res = await parseCSVFile(file);
    const analytics = parseAnalytics(res.data as string[][]);

    setData(analytics);

    if (false && process.env.NODE_ENV === "development") {
      localStorage.setItem("lastImport", JSON.stringify(analytics));
    }

    setLoading(false);
  }, []);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Analytics>();
  const [file, setFile] = useState<File>();

  return (
    <Router>
      <div className="min-h-screen p-5 flex flex-col mx-2">
        <div className="lg:w-2/3 mx-5 lg:mx-auto">
          <Title />
          <hr className="my-5" />
        </div>
        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            {loading && <div>Loading</div>}
            {!loading && (
              <div
                className={classNames(
                  { "flex-grow": !data },
                  "lg:w-2/3 mb-5 lg:mx-auto flex"
                )}
              >
                <FileUpload
                  className={classNames("w-full", { "flex-grow": !data })}
                  onUpload={handleUpload}
                  file={file}
                  onNewExport={() => {
                    setData(undefined);
                    setFile(undefined);
                  }}
                />
              </div>
            )}
            {!loading && data && (
              <div>
                <Analytic analytics={data} />
              </div>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
