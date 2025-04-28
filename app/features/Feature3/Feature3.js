"use client";
import React, { useState } from "react";
import "./Feature3.css";
import unifiedPlatform from "../../images/feature icon/cleanCode.png";
import paperlessProcess from "../../images/feature icon/paperlessProcess.png";
import easyAccess from "../../images/feature icon/easyAccess.png";
import effortlessJourney from "../../images/feature icon/effortlessJourney.png";
import skillBoost from "../../images/feature icon/customizable.png";
import skillBasedMatch from "../../images/feature icon/skillBasedMatch.png";
import realWorld from "../../images/feature icon/realWorld.png";
import verifiedPatners from "../../images/feature icon/user friendly.png";
import trainingProgram from "../../images/feature icon/trainingProgram.png";
import carrerGuidance from "../../images/feature icon/carrerGuidance.png";
import network from "../../images/feature icon/network.png";
import mentorship from "../../images/feature icon/mentorship.png";
import progressTracker from "../../images/feature icon/progressTracker.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Grid from "@mui/material/Grid";

const Feature3 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };
  const [data, setData] = useState([
    {
      image: unifiedPlatform,
      featureName: "Unified Platform",
      featureData:
        "SkillPilots provides a centralized platform where students, companies, and colleges can seamlessly interact and engage in the internship and placement process.",
    },
    {
      image: paperlessProcess,
      featureName: "Paperless Process",
      featureData:
        "Say goodbye to paperwork! SkillPilots' paperless system digitizes and automates administrative tasks, reducing manual effort and eco-friendly process for all users.",
    },
    {
      image: easyAccess,
      featureName: "Easy Access",
      featureData:
        "This platform provides easy access to a wide range of internships tailored to your interests, qualifications, and career goals, ensuring that you find the perfect fit effortlessly.",
    },
    {
      image: effortlessJourney,
      featureName: "Effortless Journey",
      featureData:
        "SkillPilots streamlines the internship process for a smooth and hassle-free experience. From application to placement, every step is optimized for efficiency and convenience.",
    },
    {
      image: skillBoost,
      featureName: "Skill Boost",
      featureData:
        "SkillPilots offers hands-on learning opportunities to enhance your abilities. Through interactive modules, practical exercises, and real-world projects, users can sharpen their skills.",
    },
    {
      image: skillBasedMatch,
      featureName: "Skills-Based Matching",
      featureData:
        "Unlike traditional recruitment methods that rely heavily on grades and academic achievements, SkillPilots prioritizes skills.",
    },
    {
      image: realWorld,
      featureName: "Real-World Experience Showcase",
      featureData:
        "SkillPilots empowers students to showcase their skills in real-world contexts, beyond just academic achievements.",
    },
    {
      image: verifiedPatners,
      featureName: "Verified Partners",
      featureData:
        "SkillPilots partners with trusted companies and organizations to offer secure internship opportunities.",
    },
    {
      image: trainingProgram,
      featureName: "Access Training Programs",
      featureData:
        "SkillPilots provides access to training programs and resources designed to help you develop and enhance your skills.",
    },
    {
      image: carrerGuidance,
      featureName: "Engage in Career Guidance",
      featureData:
        "Utilize SkillPilots' career guidance resources to explore different career paths, industries, and job roles.",
    },
    {
      image: network,
      featureName: "Network with Industry Professionals",
      featureData:
        "Attend virtual events, webinars, and networking sessions to expand your professional network, seek advice, and explore potential career opportunities.",
    },
    {
      image: mentorship,
      featureName: "Seek Feedback and Mentorship",
      featureData:
        "Seek feedback from supervisors, mentors, and peers during internships and skill enhancement activities.",
    },
    {
      image: progressTracker,
      featureName: "Progress Tracker",
      featureData:
        "Stay on top of your goals with SkillPilots' progress tracker. Users receive weekly reports detailing their achievements.",
    },
  ]);

  return (
    <div className="feature3Main">
      <h1 className="feature3Head">
        <span className="black">
          Key <span className="blue">Features</span>
        </span>
      </h1>
      <div className="dashedDash"></div>
      <p className="para">
        Piloting skills with SkillPilots involves leveraging the platform's
        features and resources to enhance your skill development and career
        readiness. Here's how you can pilot your skills with SkillPilots:
      </p>
      <div style={{width:"100%"}}>
       

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={8000} // Adjust the speed (in milliseconds) as needed
          infinite={true} // Optional: to make the carousel loop infinitely
        >
          {data.map((v, ind) => {
            return (
              <div className="multipleFeature3" key={ind}>
                <div className="feature3Img">
                  <Image src={v.image} alt="Logo" />
                </div>
                <h6>{v.featureName} </h6>
                <p>{v.featureData}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Feature3;
