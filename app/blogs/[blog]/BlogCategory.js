"use client";
import React, { useState } from "react";
import "../Blogs/Blogs.css";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function BlogCategory() {
  const [category, setCategory] = useState([
    { name: "Analytics" },
    { name: "App Design" },
    { name: "Business Intelligence" },
    { name: "Education" },
    { name: "Learning" },
    { name: "Trend" },
  ]);
  return (
    <>
      <div className="blogSubHead" style={{ marginTop: "50px" }}>Categories</div>
      <div className="dashSpecificBlog"></div>
      <div className="catDiv">
        {category.map((cat, inx) => {
            return <div key={inx} className="catName">
                <Link href="">{cat.name}</Link>
            </div>
        })}
      </div>
    </>
  );
}
