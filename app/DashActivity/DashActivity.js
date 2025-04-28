"use client";
import React from "react";
import "./DashActivity.css";
import { List } from "@mui/icons-material";
import CountUp from "react-countup";
import dashActivityImg from "../images/dashboard image.png";
import Image from "next/image";

const DashActivity = () => {
  return (
    <div className="dashActivityMain">
      <div className="dashDetail">
        <h1 className="dashHead">
          <span className="black">
            How it <span className="blue">Works</span>
          </span>
        </h1>
        <div className="dashedDash"></div>
        <p>
          Join SkillPilots Today and Take Your Education and Career to New
          Heights!
        </p>
        <div className="listItemDash">
          <List /> <b>Sign Up:</b> Create your SkillPilots account and complete
          your profile to access our range of features and services.
        </div>
        <div className="listItemDash">
          <List /> <b>Explore Opportunities:</b> Browse through internship
          listings, skill enhancement programs, and networking events to
          kickstart your journey.
        </div>

        <div className="listItemDash">
          <List /> <b>Apply and Learn:</b> Apply for internships, participate in
          skill enhancement tests, and track your progress as you gain hands-on
          experience and develop new skills.
        </div>
        <div className="listItemDash">
          <List /> <b>Generate Your Resume:</b> Let SkillPilots automatically
          generate a professional resume for you based on your internship
          experiences and accomplishments.
        </div>
        <div className="countingMain">
          <div className="counting">
            <div>
              <CountUp delay={1} end={1900} enableScrollSpy />
              <sup className="plus">+</sup>
            </div>
            <span className="countingData">Active Users</span>
          </div>

          <div className="counting">
            <div>
              <CountUp delay={1} end={27} enableScrollSpy />
              <sup className="plus">+</sup>
            </div>
            <span className="countingData">Institutes</span>
          </div>

          <div className="counting">
            <div>
              <CountUp delay={1} end={157} enableScrollSpy />
              <sup className="plus">+</sup>
            </div>
            <span className="countingData">Industries</span>
          </div>
        </div>
      </div>
      <div className="dashImg">
        <Image src={dashActivityImg} alt="Logo" className="bgDashImg" />
        {/* <div className="bgDashImg"></div> */}
      </div>
    </div>
  );
};

export default DashActivity;
