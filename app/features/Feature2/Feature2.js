"use client";
import React, { useState } from "react";
import "./Feature2.css";
import Grid from "@mui/material/Grid";
import {
  Assessment,
  Description,
  Diversity1,
  Duo,
  Engineering,
  Laptop,
  MenuBook,
  Stars,
} from "@mui/icons-material";

export default function Feature2() {
  const [data, setData] = useState([
    {
      icon: <Laptop />,
      featureName: "Internship Facilitation",
      featureData:
        "Connect with leading companies and access meaningful internship opportunities tailored to your interests and career goals.",
    },
    {
      icon: <Description />,
      featureName: "Automated Resume Building",
      featureData:
        "automatically generate professional resumes for students based on their internship experiences, skills, and achievements.",
    },
    {
      icon: <Engineering />,
      featureName: "Skill Enhancement Tests",
      featureData:
        "SkillPilots provides skill enhancement tests to help users identify their strengths and areas for improvement.",
    },
    {
      icon: <Stars />,
      featureName: "Internship Rating Card",
      featureData:
        "After completing an internship, users can provide feedback and ratings through SkillPilots' internship rating card.",
    },
    {
      icon: <MenuBook />,
      featureName: "Sponsored College Projects",
      featureData:
        "SkillPilots collaborates with colleges to sponsor innovative projects that bridge the gap between academia and industry.",
    },

    {
      icon: <Assessment />,
      featureName: "Live Bidding for Candidates",
      featureData:
        "Employers can engage in live bidding sessions to recruit top talent directly through SkillPilots. Candidates have different opportunity.",
    },
    {
      icon: <Duo />,
      featureName: "Live Chat and Video Conferencing",
      featureData:
        "SkillPilots facilitates seamless communication between users through live chat and video conferencing capabilities.",
    },
    {
      icon: <Diversity1 />,
      featureName: "Industry Expert Guest Lectures",
      featureData:
        "SkillPilots hosts guest lectures by industry experts to provide valuable insights and mentorship to users.",
    },
  ]);
  return (
    <div className="feature2Main">
      <div className="bgFeature2"></div>
      <h1 className="feature2Head">Attractive Features</h1>
      <div className="dashFeature2"></div>
      <p>
        With these attractive features, SkillPilots offers a comprehensive and
        engaging platform that empowers users to navigate their career journeys
        with confidence and success.
      </p>

      <Grid container spacing={2} mt={1} py={6} className="mainGrid">
        {data.map((v, ind) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} key={ind}>
              <div className="ffeature">
                {v.icon}
                <div className="nameData">
                  <div className="fName">{v.featureName}</div>
                  <div className="data">{v.featureData}</div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
