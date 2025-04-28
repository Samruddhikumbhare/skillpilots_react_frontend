"use client";
import React from "react";
import "./TopBarData.css";
import Image from "next/image";
import { PlayCircleFilledWhite } from "@mui/icons-material";
import ovalback from "../images/ovalback.png";
import topbarImage from "../images/topbar image.png";
import bigcircle from "../images/big blue circle.png";
import mediumcircle from "../images/medium blue circle.png";
import rec from "../images/rectangelshape.png";
import smallcircle from "../images/smallblue circle.png";
import Link from "next/link";
import googlePlay from "../images/play store.png";

const TopBarData = () => {

  return (
    <div className="topBarMain">
      <div className="topBarData">
        <div className="leftTopBar">
          <h1 className="firstHead">
            <span className="black">
              <span className="blue">Skillpilots</span> is a gateway to success
              in <span className="blue">education</span> and{" "}
              <span className="blue">employment</span>.
            </span>
          </h1>
          <div className="dashedTop"></div>

          <p>
            Our Aim is to empower individuals to achieve their career goals
            through top-quality education and job placement services.
          </p>
          <div className="topBtns">
            <button className="commonBtn">
              <Link href="https://home.skillpilots.com/student_reg_step1" target="_blank">
                Student Register
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.cluematrixtechnologies.skillpilots&pli=1"
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                Play Store
              </Link>
            </button>
          </div>
          

          <Image src={smallcircle} alt="Logo" className="smallcircleImage" />

          <div className="whiteBigCircle2"></div>
          <div className="whiteBigCircle3"></div>
        </div>
        <Image src={bigcircle} alt="Logo" className="circleImage" />
        <Image src={mediumcircle} alt="Logo" className="mediumCircleImage" />

        <div className="rightTopBar">
          <Image src={ovalback} alt="Logo" className="ovalImage" />
          <Image src={topbarImage} alt="Logo" className="topbarImage" />

          <Image src={rec} alt="Logo" className="topbarImageRec1" />
          <Image src={rec} alt="Logo" className="topbarImageRec2" />
          <div className="whiteBigCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBarData;
