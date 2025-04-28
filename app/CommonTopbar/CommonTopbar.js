import React from "react";
import "./CommonTopbar.css";
import Link from "next/link";

const CommonTopbar = ({ pageName }) => {
  return (
    <div className="commonTopBarMain">
      <h1>{pageName}</h1>
      <div className="breadcrumbs">
        <Link href="/">HOME</Link> <span style={{ margin: "0 10px" }}>/</span>
        {pageName}
      </div>
    </div>
  );
};

export default CommonTopbar;
