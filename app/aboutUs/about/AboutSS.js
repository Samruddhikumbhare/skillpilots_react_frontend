import React from "react";
import "./AboutSS.css";
import Image from "next/image";
import userInterface from "../../images/about.png";

export default function AboutSS() {
  return (
    <div className="aboutMain">
      <div className="about">
        <Image src={userInterface} alt="userInterface"  />
      </div>

      <div className="aboutDescription">
        <h1 className="aboutHead">
          <span className="black">
            About <span className="blue">Skillpilots</span>
          </span>
        </h1>
        <div className="dashedabout"></div>

        <p
          style={{ fontWeight: "bold", fontSize: "18px", fontStyle: "italic" }}
        >
          "Unlock Your Potential with Skillpilots!"
        </p>
        <p>
          Your Gateway to Success in Education and Employment. Empowering
          Students, Colleges, and Companies for a Brighter Future Our Aim is to
          empower individuals to achieve their career goals through top-quality
          education and job placement services.
        </p>

        <p>
          At SkillPilots, we believe in transforming the education-to-employment
          journey by bridging the gap between learning and industry needs. With
          our innovative platform, we empower students to gain practical
          experience, develop relevant skills, and prepare for successful
          careers. Our goal is to shape a future where every individual has the
          tools, support, and opportunities needed to achieve their fullest
          potential. Join us on this journey and unlock your path to success
        </p>

        <p>
          We prioritize a personalized experience, providing users with tailored
          recommendations and support to help them navigate their career
          journey. Our platform fosters a supportive community where learners
          can connect with mentors, peers, and industry professionals, fostering
          collaboration and knowledge sharing.
        </p>

        <p>
          Skillpilots brings you wherever your employment journey takes flight!
        </p>

        {/* <div className="listItemDash">
          <List /> Enjoy lifetime free updates.
        </div>
        <div className="listItemDash">
          <List /> Cross browser and cross platform compatibility.
        </div>

        <div className="listItemDash">
          <List /> Friendly and effective support team.
        </div> */}
      </div>
    </div>
  );
}
