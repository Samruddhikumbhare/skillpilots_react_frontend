"use client";
import React, { useState } from "react";
import "./Feedback.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quotationImg from "../images/quotation.png";
import Image from "next/image";
import person from "../images/person.png";

const FeedBack = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 860 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 860, min: 0 },
      items: 1,
    },
  };

  const [data, setData] = useState([
    {
      image: person,
      para: " At SkillPilots Interns are very Skillfull. At SkillPilots they are maintating the students rating report so it is very easy to find Skillful interns and resources with appropriate Skills.",
      name: "Mahagenco",
      designation: "CE",
    },
    {
      image: person,
      para: "As a institutes we have cleared idea what happining in internship, because Every company update weekly Schedule for internships along with the Internship Advertisement.",
      name: "PCE",
      designation: "HOD",
    },
    {
      image: person,
      para: "SkillPilots is very usefulll application to find extreamly talented resources from well known institutes. Here we can give preplacements offer to talented students.",
      name: "SP Cranes Pvt. Ltd.,",
      designation: "CEO",
    },
    {
      image: person,
      para: "Here at SkillPilots, We can track each and every Students performance evey week. if SkillPilots was not there it was very difficult to find each and every student status.",
      name: "RGCERT, Chandrapur",
      designation: "HOD",
    },
  ]);

  return (
    <div className="feedBackMain">
      <h1 className="feedBackHead">
        <span className="black">
          Happy clients <span className="blue">feedback</span>
        </span>
      </h1>
      <div className="dashedFeedback"></div>
      {/* <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi
        id elit gravida, quis tincidunt purus fringilla. Aenean convallis a
        neque non pellentesque.
      </p> */}

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={10000} // Adjust the speed (in milliseconds) as needed
        infinite={true} // Optional: to make the carousel loop infinitely
      >
        {data.map((v, ind) => {
          return (
            <div className="carouselMainFeedback" key={ind}>
              <div className="symbolFeed">
                <Image src={quotationImg} alt="Quotation" />
              </div>
              <div className="feedBackPara">{v.para}</div>
              <div className="bottomShow"></div>
              <div className="personDetail">
                <Image src={v.image} alt="person" className="personImage" />
                <div className="detailP">
                  <h5 className="name">{v.name}</h5>
                  <h5 className="designation">{v.designation}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FeedBack;
