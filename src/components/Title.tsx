import React from "react";

export default function Title() {
  return (
    <div className="flex items-center flex-wrap">
      <div className="flex items-center flex-grow">
        <img
          src="logo-bg.png"
          width="100"
          className="rounded-full mr-4 hidden md:block"
          alt="CurseForge Analytics logo"
        />
        <h1 className="font-brand flex flex-wrap">
          CurseForge
          <div className="font-bold slide-right ml-2">
            <p>Analytics</p>
          </div>
        </h1>
      </div>
      <div className="w-full lg:w-0 lg:text-right mt-2">
        <h4>Privacy</h4>
      </div>
    </div>
  );
}
