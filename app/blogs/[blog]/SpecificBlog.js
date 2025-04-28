"use client";
import React, { useState } from "react";
import "../Blogs/Blogs.css";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import BlogCategory from "./BlogCategory";
import RecentPost from "./RecentPost";
import FollowUs from "./FollowUs";
import Keyword from "./Keyword";

export default function SpecificBlog({ data }) {
  const [comments, setComments] = useState([
    {
      name: "Medha Umredkar",
      email: "medha@gmail.com",
      website: "www.cluematrix.com",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.",
    },
    {
      name: "Medha Umredkar",
      email: "medha@gmail.com",
      website: "www.cluematrix.com",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.",
    },
    {
      name: "Medha Umredkar",
      email: "medha@gmail.com",
      website: "www.cluematrix.com",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.",
    },
  ]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const onSubmitHandler = () => {
    if (input.name === "") {
      setError((prev) => {
        return { ...prev, name: "Name is required" };
      });
    }

    if (input.comment === "") {
      setError((prev) => {
        return { ...prev, comment: "Write Your Comment" };
      });
    }

    if (input.email === "") {
      setError((prev) => {
        return { ...prev, email: "Email Id is required" };
      });
    }

    if (input.name !== "" && input.comment !== "" && input.email !== "") {
      console.log(input);
    }
  };
  return (
    <div className="blogsMain">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <div className="blog">
            <Image src={data.image} alt="Blog Images" />
            <div className="blogData">
              <div className="blogDate">{data.date}</div>

              {data.para.map((vv, inx) => {
                return <p key={inx}>{vv}</p>;
              })}
            </div>
          </div>

          <div className="commentPeople" style={{ marginTop: "20px" }}>
            <div className="blogData">
              <div className="blogLeaveComment">Comments</div>
              {comments.map((c, inx) => {
                return (
                  <div key={inx} className="indComment">
                    <p className="commentWritten">{c.comment}</p>
                    <div className="personName">{c.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Grid item container xs={12} className="postCommentForm" p={5}>
            <Grid item xs={12} className="blogLeaveComment" px={1}>
              Leave a Comment
            </Grid>
            <Grid item xs={12} mb={4} className="noteContact" px={1}>
              Your email address will not be published. Required fields are
              marked *
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={1}>
              <TextField
                type="text"
                name="name"
                label="Name *"
                value={input.name}
                onChange={onChangeHandler}
                error={error.name !== "" ? true : false}
                helperText={error.name}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={1}>
              <TextField
                type="text"
                name="contact"
                label="Email Id*"
                value={input.email}
                onChange={onChangeHandler}
                error={error.email !== "" ? true : false}
                helperText={error.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} p={1}>
              <TextField
                type="text"
                name="website"
                label="Website"
                value={input.website}
                onChange={onChangeHandler}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} p={1}>
              <TextField
                type="text"
                name="comment"
                label="Comment *"
                value={input.comment}
                onChange={onChangeHandler}
                rows={4}
                error={error.comment !== "" ? true : false}
                helperText={error.comment}
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={12} p={1}>
              <button className="commonBtn" onClick={onSubmitHandler}>
                Post Comment
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="sBlogSection">
            <Keyword data={data} />
            <BlogCategory />
            <RecentPost />
            <FollowUs data={data} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
