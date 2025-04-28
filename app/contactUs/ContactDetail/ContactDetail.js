"use client";
import React, { useEffect, useState } from "react";
import "./ContactDetail.css";
import Grid from "@mui/material/Grid";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import {TextField, Alert} from "@mui/material";

export default function ContactDetail() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    help: "",
    msg: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [result, setResult] = React.useState({ msg: "", variant: "" });

  useEffect(() => {
    if (result.msg !== "") {
      setTimeout(() => {
        setResult({ msg: "", variant: "" });
      }, 15000);
    }
  }, [result]);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const onSubmitHandler = async () => {
    if (input.name === "") {
      setError((prev) => {
        return { ...prev, name: "Name is required" };
      });
    }

    if (input.contact === "") {
      setError((prev) => {
        return { ...prev, contact: "Mobile Number is required" };
      });
    }

    if (input.email === "") {
      setError((prev) => {
        return { ...prev, email: "Email Id is required" };
      });
    }

    if (input.name !== "" && input.contact !== "" && input.email !== "") {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email Id", input.email);
      formData.append("mobile Number", input.contact);
      formData.append("How Can I help you?", input.help);
      formData.append("message", input.msg);

      formData.append("access_key", "bdca3706-4034-494a-b648-e856c843c680");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          msg: "Your Message Submitted Successfully, We will contact you soon...",
          variant: "success",
        });
        setInput({ name: "", email: "", contact: "", help: "", msg: "" });
      } else {
        setResult({ msg: data.message, variant: "error" });
      }
    }
  };

  return (
    <div className="contactDetailMain">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="contactContactDetail">
            <h4>
              <LocationOn /> Address
            </h4>
            <div className="contactData">
              <p>
                Plot No. 25, Vaishnavi Nagar, Vikasanand Mission Co, opp
                Society, Kharbi, Nagpur, Maharashtra 440034
              </p>
            </div>

            <h4>
              <Phone /> Contact Number
            </h4>
            <div className="contactData">
              <p className="contactInfo">0712-4054190 / +91 8999610381</p>
              <p className="noteContact">
                Our customer care is open from Mon-Fri, 9:30 am to 6:30 pm
              </p>
            </div>

            <h4>
              <Mail /> Email Id
            </h4>
            <div className="contactData">
              <p className="contactInfo">support@cluematrix.com</p>
              <p className="noteContact">
                Our support team will get back to in 48-h during standard
                business hours.
              </p>
            </div>

            <div className="contactSocialDiv">
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
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <div className="contactForm">
            <h1 className="contactFormHead">
              <span className="blue">
                Connect <span className="black">with us</span>
              </span>
            </h1>
            <div className="dashedContactDetail"></div>
            <Grid item container xs={12}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={12} md={6} p={1}>
                <TextField
                  type="text"
                  name="name"
                  label="Name"
                  value={input.name}
                  onChange={onChangeHandler}
                  error={error.name !== "" ? true : false}
                  helperText={error.name}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} p={1}>
                <TextField
                  type="text"
                  name="email"
                  label="Email Id"
                  value={input.email}
                  onChange={onChangeHandler}
                  error={error.email !== "" ? true : false}
                  helperText={error.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  type="number"
                  name="contact"
                  label="Mobile Number"
                  value={input.contact}
                  onChange={onChangeHandler}
                  error={error.contact !== "" ? true : false}
                  helperText={error.contact}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  type="text"
                  name="help"
                  label="How can I help you?"
                  value={input.help}
                  onChange={onChangeHandler}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  type="text"
                  name="msg"
                  label="Message"
                  value={input.msg}
                  onChange={onChangeHandler}
                  rows={3}
                  multiline
                  fullWidth
                />
              </Grid>
              {result.msg !== "" && (
                <Grid item xs={12} p={1}>
                  <Alert severity={result.variant} variant="filled">{result.msg}</Alert>
                </Grid>
              )}
              <Grid item xs={12} p={1}>
                <button className="sendMessageBtn" onClick={onSubmitHandler}>
                  Send message
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
