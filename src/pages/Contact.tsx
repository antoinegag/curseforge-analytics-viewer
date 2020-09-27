import { Mail, Globe } from "heroicons-react";
import React from "react";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout>
      <h2 className="mb-3">Contact</h2>
      <p className="mb-4">
        Don't hesitate to get in touch if you have any question or concern.
      </p>
      <div className="mb-3">
        <h4 className="mb-2 flex items-center font-sans">
          <Mail size={32} className="mr-2" />
          <a href="mailto:cfa@antoineg.dev">cfa@antoineg.dev</a>
        </h4>
        <h4 className="mb-2 flex items-center font-sans">
          Twitter{" "}
          <a
            className="ml-2"
            href="https://twitter.com/antoineg_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @antoineg_dev
          </a>{" "}
        </h4>
      </div>
    </Layout>
  );
}
