"use client";
import React, { useState } from "react";
import "./Blogs.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";
import { blogData } from "../blogData";

export default function Blogs() {
  
  return (
    <div className="blogsMain">
      <Grid container spacing={2} className="mainGrid">
        {blogData.map((v, ind) => {
          return (
            <Grid item xs={12} sm={12} md={6} key={ind}>
              <div className="blog">
                <Image src={v.image} alt="Blog Images" />
                <div className="blogData">
                  <div className="blogDate">{v.date}</div>

                  <h4
                    className="blogHeading"
                    onClick={() => {
                      localStorage.setItem(
                        "skillPilotBlogData",
                        JSON.stringify(v)
                      );
                    }}
                  >
                    <Link href={`/blogs/${v.heading}`}>{v.heading}</Link>
                  </h4>

                  <p>
                    {v.para[0].length > 200
                      ? v.para[0].substring(0, 200) + "..."
                      : v.para[0] + "..."}
                  </p>

                  <div
                    className="readMoreBlog"
                    onClick={() => {
                      localStorage.setItem(
                        "skillPilotBlogData",
                        JSON.stringify(v)
                      );
                    }}
                  >
                    <Link href={`/blogs/${v.heading}`}>
                      Read More <KeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
