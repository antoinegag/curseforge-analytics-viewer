import React from "react";

export default function Title() {
  return (
    <div className="flex items-center justify-center">
      <img src="logo-bg.png" width="100" className="rounded-full mr-4" />
      <h1 className="font-brand">
        CurseForge <span className="font-bold">Analytics</span>
      </h1>
    </div>
  );
}
