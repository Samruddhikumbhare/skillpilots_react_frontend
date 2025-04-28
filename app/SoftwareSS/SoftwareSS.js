"use client";
import React, { useState } from "react";
import "./SoftwareSS.css";
import Image from "next/image";
import s1 from "../images/software ss/1.png";
import s2 from "../images/software ss/2.png";
import s3 from "../images/software ss/3.png";
import s4 from "../images/software ss/4.png";
import s6 from "../images/software ss/6.png";


import bgSS from "../images/slider.png";
import bgMobile from "../images/mobileSlider.png";

import { Carousel } from "react-bootstrap";

export default function SoftwareSS() {
  const [index, setIndex] = useState(0);

  const [images, setImages] = useState([s1, s2, s3, s4, s6]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="softwareSsMain">
      <div className="softwareSsData">
        <h1 className="softwareSsHead">Why Skillpilots</h1>
        <p>
          In today's competitive job market, landing the right internship can be
          the key to unlocking future career success. SkillPilots is at the
          forefront of revolutionizing the internship landscape, offering a
          transformative platform that connects students, companies, and
          colleges in a seamless and paperless manner.
        </p>
        <div className="carouselBgLaptop">
          <Image src={bgSS} alt="Background" className="bgImage" />
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="softwareSSCarousel"
            interval={4000}
          >
            {images.map((v, ind) => {
              return (
                <Carousel.Item key={ind}>
                  <Image src={v} alt="Logo" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
