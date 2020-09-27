import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

function TitleLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const location = useLocation();
  return (
    <div className="text-xl font-brand">
      <Link
        to={href}
        className={classNames(
          "no-underline",
          location.pathname === href ? "bracket-active" : "bracket"
        )}
      >
        {children}
      </Link>
    </div>
  );
}

export default function Title() {
  return (
    <div className="flex items-center flex-wrap">
      <div className="flex-grow">
        <Link to="/" className="no-underline flex items-center flex-grow">
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
        </Link>
      </div>
      <div
        className="w-full lg:w-auto lg:text-right mt-2 flex flex-col"
        style={{ direction: "rtl" }}
      >
        <TitleLink href="/privacy">Privacy</TitleLink>
        <TitleLink href="/help">Help</TitleLink>
        <TitleLink href="/contact">Contact</TitleLink>
      </div>
    </div>
  );
}
