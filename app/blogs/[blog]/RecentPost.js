"use client";
import React, { useState } from "react";
import "../Blogs/Blogs.css";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "../blogData";

export default function RecentPost() {

  return (
    <>
      <div className="blogSubHead" style={{ marginTop: "50px" }}>
        Recent Post
      </div>
      <div className="dashSpecificBlog"></div>
      <div className="catDiv">
        {blogData.map((b, inx) => {
          return (
            <div key={inx} className="recentPostBlog">
              <div className="postImg">
                <Image src={b.image} alt="Blog Images" />
              </div>
              <div className="nameDate">
                <div
                  className="blogName"
                  onClick={() => {
                    localStorage.setItem(
                      "skillPilotBlogData",
                      JSON.stringify(b)
                    );
                  }}
                >
                  <Link href={`/blogs/${b.heading}`}>{b.heading}</Link>
                </div>
                <div className="recentDate">{b.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
