"use client";
import React from "react";
import "../Blogs/Blogs.css";
import Link from "next/link";
import { blogData } from "../blogData";

export default function Keyword({ data }) {
  return (
    <>
      <div className="blogSubHead">Keywords</div>
      <div className="dashSpecificBlog"></div>
      <div className="keywordDiv">
        {data.keyword.map((cat, inx) => {
          let ab = {};
          return (
            <div
              key={inx}
              className="keywordBlog"
              onClick={() => {
                ab = blogData.find((v) => {
                  return v.keyword.includes(cat);
                });
                localStorage.setItem("skillPilotBlogData", JSON.stringify(ab));
              }}
            >
              <Link href={`/blogs/${cat}`}>{cat}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
