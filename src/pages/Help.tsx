import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Help() {
  return (
    <Layout>
      <h2 className="mb-3">Help</h2>
      <div className="mb-3">
        <h3 className="mb-2">Getting your CurseForge export</h3>
        <p>
          Head to the{" "}
          <a
            href="https://minecraft.curseforge.com/dashboard/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            CurseForge project dashboard
          </a>{" "}
          and click on the{" "}
          <span className="bg-green-600 p-2 text-white rounded-lg">
            Download
          </span>{" "}
          button in the Analytics column.
        </p>
      </div>
      <div className="mb-3">
        <h3 className="mb-2">Something is wrong</h3>
        <p>
          For any issue please open an issue on{" "}
          <a
            href="https://github.com/antoinegag/curseforge-analytics-viewer/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          or <Link to="/contact">contact</Link> me
        </p>
      </div>
    </Layout>
  );
}
