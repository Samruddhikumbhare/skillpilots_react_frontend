"use client";
import React, { useState } from "react";
import "../Blogs/Blogs.css";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

export default function FollowUs({ data }) {
    console.log(data)
  return (
    <>
      <div className="blogSubHead" style={{ marginTop: "50px" }}>Follow Us</div>
      <div className="dashSpecificBlog"></div>
      <div className="followUsLink">
        <Link href={data.fbLink}>
          <div className="socialIcon">
            <Facebook />
          </div>
        </Link>
        <Link href={data.instaLink}>
          <div className="socialIcon">
            <Instagram />
          </div>
        </Link>
        <Link href={data.linkedInLink}>
          <div className="socialIcon">
            <LinkedIn />
          </div>
        </Link>
        <Link href={data.youtubeLink}>
          <div className="socialIcon">
            <YouTube />
          </div>
        </Link>
      </div>
    </>
  );
}
