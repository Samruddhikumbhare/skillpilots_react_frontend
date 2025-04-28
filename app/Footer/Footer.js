import React from "react";
import "./Footer.css";
import logo from "../images/logo white.png";
import Image from "next/image";
import googlePlay from "../images/play store.png";
import appStore from "../images/app store.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footerClass">
      <div className="footerMain">
        <div className="logoData">
          <Image
            src={logo}
            alt="Logo"
            style={{ height: "35px", width: "auto" }}
          />
          <p>
            Join SkillPilots today and take the first step towards realizing
            your full potential and achieving your career aspirations.
            SkillPilots is here to support you every step of the way.
          </p>

          <div className="storeImg">
            <button className="joinBtn">
              <Link href="https://home.skillpilots.com/home" target="_blank">
                Join Now
              </Link>
            </button>
            <Link href="https://play.google.com/store/apps/details?id=com.cluematrixtechnologies.skillpilots&pli=1" target="_blank">
              <Image src={googlePlay} alt="Google Play" /></Link>
            {/* <Image src={appStore} alt="App Store" /> */}
          </div>
        </div>
        <div className="pagesLink">
          <h2>Pages</h2>
          <div className="dashedFooter"></div>

          <ul>
            <li>
              &#9673; <Link href="/aboutUs"> About Us</Link>
            </li>
            {/* <li>
              &#9673; <Link href="/blogs">Blogs</Link>
            </li> */}
            <li>
              &#9673; <Link href="/features">Features</Link>
            </li>

            <li>
              &#9673; <Link href="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="pagesLink">
          <h2>Useful Links</h2>
          <div className="dashedFooter"></div>

          <ul>
            <li>
              &#9673; <Link href="/cookiesPolicy">Cookies Policy</Link>
            </li>

            <li>
              &#9673; <Link href="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              &#9673; <Link href="/termsCondition">Terms & Conditions</Link>
            </li>
            <li>
              &#9673; <Link href="/refundPolicy">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <div className="pagesLink contact">
          <h2>Contact Us</h2>
          <div className="dashedFooter"></div>
          <p>Your Bridge to Success in Education and Employment</p>
          <ul>
            <li>
              <LocationOn /> Plot No. 25, Vaishnavi Nagar, Vikasanand Mission
              Co, opp Society, Kharbi, Nagpur, Maharashtra 440034
            </li>
            <li>
              <Mail /> support@cluematrix.com
            </li>
            <li>
              <Phone /> 0712-4054190 / +91 8999610381
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerLink">
        <p>
          Designed and Developed by{" "}
          <Link href="https://cluematrix.com/" target="_blank">
            Cluematrix
          </Link>
        </p>
        <div className="socialDiv">
          <Link href="https://www.facebook.com/skillpilots" target="_blank">
            <div className="socialIcon">
              <Facebook />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/skillpilots_india/"
            target="_blank"
          >
            <div className="socialIcon">
              <Instagram />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/skillpilots"
            target="_blank"
          >
            <div className="socialIcon">
              <LinkedIn />
            </div>
          </Link>
          <Link href="https://wa.me/+918999610381" target="_blank">
            <div className="socialIcon">
              <WhatsApp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
