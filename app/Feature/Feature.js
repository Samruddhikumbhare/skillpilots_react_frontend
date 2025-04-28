import React from "react";
import "./Feature.css";
import Link from "next/link";

export default function Feature() {
  return (
    <div className="featuresMain">
      <div className="feature">
        <div className="featureDetail ">
          <div className="cleanCodeImage"></div>
          <h6>Unified Platform</h6>
          <p>
            Students, companies, and colleges can seamlessly interact and engage
            in the internship and placement process.
          </p>
        </div>

        <div className="featureDetail customizable">
          <div className="customizableImage"></div>
          <h6>Skill Boost</h6>
          <p>
            SkillPilots offers hands-on learning opportunities to enhance your
            abilities through real-world projects.
          </p>
        </div>

        <div className="featureDetail userFriendly">
          <div className="userFriendlyImage"></div>
          <h6>Verified Partners</h6>
          <p>
            SkillPilots partners with trusted companies and organizations to
            offer secure internship opportunities.
          </p>
        </div>

        <div className="featureDetail fullSecure">
          <div className="fullSecureImage"></div>
          <h6>Training Programs</h6>
          <p>
            SkillPilots provides access to training programs and resources
            designed to help you develop and enhance your skills.
          </p>
        </div>
      </div>

      <div className="featureDescription">
        <h1 className="featureHead">
          <span className="black">Enjoy our powerful</span>
          <span className="blue">features</span>
        </h1>
        <div className="dashedFeature"></div>

        <p>
          Imagine a world where internships are the gateway to your dream
          career, free from cumbersome paperwork, where your skills trump exam
          scores. SkillPilots is the transformation! We are revolutionizing
          recruitment by emphasizing real-world experience and talent. Welcome
          to a future where employment is central and your potential is
          limitless. Join us to rewrite the rules and unlock new possibilities.
        </p>
        <p>
          Our goal is to shape a future where every individual has the tools,
          support, and opportunities needed to achieve their fullest potential.
        </p>
        <p>
          Piloting skills with SkillPilots involves leveraging the platform's
          features and resources to enhance your skill development and career
          readiness. Here's how you can pilot your skills with SkillPilots.
        </p>

        <div>
          <button className="commonBtn">
            <Link href="/features">Discover more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
