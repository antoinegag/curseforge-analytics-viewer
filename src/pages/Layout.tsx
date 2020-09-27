import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "heroicons-react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="lg:w-2/3 mx-5 lg:mx-auto">
      <div className="mb-2 flex items-center">
        <ArrowLeft size={16} />
        <Link to="/" className="no-underline bracket">
          Home
        </Link>
      </div>
      {children}
    </div>
  );
}
