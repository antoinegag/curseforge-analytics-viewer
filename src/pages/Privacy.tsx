import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Privacy() {
  return (
    <Layout>
      <h2 className="mb-3">Privacy</h2>
      <div className="mb-3">
        <h3 className="mb-3">Data</h3>
        <div className="mb-3">
          <h4 className="mb-1">Usage</h4>
          <p>
            The data uploaded to this app is only used to generate statistics
            and display them.
          </p>
        </div>
        <div className="mb-3">
          <h4>Collection</h4>
          <p>
            No data is collected by the application. Export data, raw and
            processed is never sent to any remote server or parties.
          </p>
        </div>
        <div className="mb-3">
          <h4>Sharing</h4>
          <p>No data is ever shared with any third party.</p>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="mb-3">Source Code</h3>
        <p>
          You can view the source code of this app on{" "}
          <a href="https://github.com/antoinegag/curseforge-analytics-viewer">
            Github
          </a>
        </p>
      </div>

      <div>
        <p>This privacy policy is subject to change at any time</p>
        <p>
          Last update: <span className="font-bold">2020-09-27</span>
        </p>
        <Link to="/contact">Contact</Link>
      </div>
    </Layout>
  );
}
