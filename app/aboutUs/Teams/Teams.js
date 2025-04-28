"use client";
import React, { useState } from "react";
import "./Teams.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import teams1Img from "../../images/teams/team-1.png";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Teams = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 1000 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1000, min: 750 },
      items: 2,
    },
    mobilesmall: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  const [data, setData] = useState([
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
    {
      image: teams1Img,
      name: "ABC XYZ",
      designation: "CEO & Founder",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
    },
  ]);

  return (
    <div className="teamsMain">
      <div className="missionMain">
        {/* <div className="featureDetailAbout ">
          <div className="responsibility"></div>
          <h6>Our Responsibility</h6>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div> */}

        <div className="featureDetailAbout ">
          <div className="approach"></div>
          <h6>Our Vision</h6>
          <p>
            To be the leading catalyst for transforming the education and
            employment landscapes by seamlessly bridging the gap between
            learning and industry needs, empowering individuals to thrive in the
            rapidly evolving global economy.
          </p>
        </div>

        <div className="featureDetailAbout ">
          <div className="mission"></div>
          <h6>Our Mission</h6>
          <p>
            Transforming education into career success by bridging the gap
            between students, Institutions and Industry. We are dedicated to
            empowering individuals with the skills, experiences, and
            opportunities necessary for lifelong learning and career success. By
            fostering excellence, collaboration, and continuous innovation, we
            aim to ensure every individual can achieve their highest potential.
          </p>
        </div>
      </div>

      <div className="teamData">
        <h1 className="teamsHead">
          <span className="black">
            Our team of <span className="blue">experts</span>
          </span>
        </h1>
        <div className="dashedDash"></div>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a
          neque non pellentesque.
        </p>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={8000} // Adjust the speed (in milliseconds) as needed
          infinite={true} // Optional: to make the carousel loop infinitely
        >
          {data.map((v, ind) => {
            return (
              <div className="teamsMember" key={ind}>
                <div className="teamsImage">
                  <Image src={v.image} alt="teamsMember" />
                  <div className="overlay">
                    <div className="memberLink">
                      <Link href="">
                        <div className="socialIcon">
                          <Facebook />
                        </div>
                      </Link>
                      <Link href="">
                        <div className="socialIcon">
                          <Instagram />
                        </div>
                      </Link>
                      <Link href="">
                        <div className="socialIcon">
                          <LinkedIn />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <h4 className="memberName">{v.name}</h4>
                <div className="designation">{v.designation}</div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Teams;
