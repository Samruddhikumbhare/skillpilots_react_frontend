"use client";
import React, { useState } from "react";
import "./Clients.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import client1Img from "../../images/clients logo/company-logo-1 (1).png";
import client2Img from "../../images/clients logo/company-logo-1 (2).png";
import client3Img from "../../images/clients logo/company-logo-1 (3).png";
import client4Img from "../../images/clients logo/company-logo-1 (4).png";
import client5Img from "../../images/clients logo/company-logo-1 (5).png";
import client6Img from "../../images/clients logo/company-logo-1 (6).png";
import client7Img from "../../images/clients logo/company-logo-1 (7).png";
import client8Img from "../../images/clients logo/company-logo-1 (8).png";

const Clients = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 1000 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 1000, min: 750 },
      items: 3,
    },
    mobilesmall: {
      breakpoint: { max: 750, min: 520 },
      items: 2,
    },
    mobileextrasmall: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };

  const [data, setData] = useState([
    client1Img,
    client2Img,
    client3Img,
    client4Img,
    client5Img,
    client6Img,
    client7Img,
    client8Img,
  ]);

  return (
    <div className="clientsMain">
      <h1 className="clientsHead">
        <span className="black">
          Trusted by many <span className="blue">companies</span>
        </span>
      </h1>
      <div className="dashedDash"></div>
      {/* <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi
        id elit gravida, quis tincidunt purus fringilla. Aenean convallis a
        neque non pellentesque.
      </p> */}

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000} // Adjust the speed (in milliseconds) as needed
        infinite={true} // Optional: to make the carousel loop infinitely
      >
        {data.map((v, ind) => {
          return (
            <div className="clientLogo" key={ind}>
              <Image src={v} alt="clientLogo" className="clientImage" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Clients;
