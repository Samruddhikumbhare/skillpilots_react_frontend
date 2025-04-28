"use client";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CommonTopbar from "../../CommonTopbar/CommonTopbar";
import { useState } from "react";
import SpecificBlog from "./SpecificBlog";

export default function Blog() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("skillPilotBlogData"))
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName={data.heading} />
      <SpecificBlog data={data} />
      <Footer />
    </main>
  );
}
