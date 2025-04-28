import React from "react";
import "./Contact.css";
import Link from "next/link";

function Contact() {
  return (
    <div className="contactMain">
      <div>
        <h1 className="normal">Do you have any questions?</h1>
        <h1 className="italic">We are happy to help you.</h1>
      </div>
      <div className="contactBtn">
        <Link href="/contactUs"> Contact Us Now</Link>
      </div>
    </div>
  );
}

export default Contact;
