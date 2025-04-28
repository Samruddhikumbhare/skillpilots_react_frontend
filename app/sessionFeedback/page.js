"use client";

import { useState } from "react";
import "./session.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../api.js";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    email: "",
    contact: "",
    rating: "",
    relevance: "",
    engagement: "",
    clarity: "",
    confidence: "",
    helpfulParts: [],
    applyInsights: "",
    improvements: "",
    recommend: "",
    comments: "",
  });

  const [error, setError] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    email: "",
    contact: "",
    rating: "",
    relevance: "",
    engagement: "",
    clarity: "",
    confidence: "",
    helpfulParts: "",
    recommend: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        helpfulParts: checked
          ? [...prev.helpfulParts, value]
          : prev.helpfulParts.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setError((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Validation checks
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!formData.year) {
      newErrors.year = "Year of study is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid Email Id";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    if (!formData.rating) {
      newErrors.rating = "Select one of the option";
    }

    if (!formData.relevance) {
      newErrors.relevance = "Select one of the option";
    }

    if (!formData.engagement) {
      newErrors.engagement = "Select one of the option";
    }

    if (!formData.clarity) {
      newErrors.clarity = "Select one of the option";
    }

    if (!formData.confidence) {
      newErrors.confidence = "Select one of the option";
    }

    if (formData.helpfulParts.length === 0) {
      newErrors.helpfulParts = "Select one of the option";
    }

    if (!formData.recommend) {
      newErrors.recommend = "Select one of the option";
    }

    // If there are errors, update state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      setLoading(false);
      return;
    }

    await axios
      .post(`${api}/newskill/feedbackSave`, formData)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Thank you for your feedback!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.reload();
        });

        setFormData({
          name: "",
          college: "",
          department: "",
          year: "",
          email: "",
          contact: "",
          rating: "",
          relevance: "",
          engagement: "",
          clarity: "",
          confidence: "",
          helpfulParts: [],
          applyInsights: "",
          improvements: "",
          recommend: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.log("Axios error:", error);
        if (error.message !== undefined) {
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Something went wrong...",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
    setLoading(false);
  };

  return (
    <main className="min-h-screen ">
      <Navbar />
      <CommonTopbar pageName="Session Feedback" />
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-20 mb-20 sessionF">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Pathway to Career Clarity - Session Feedback Form
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Thank you for attending the "Pathway to Career Clarity" session! We
          value your feedback and would appreciate if you could take a few
          minutes to complete this form. Your responses will help us improve
          future sessions.
        </p>

        <form onSubmit={handleSubmit}>
          <hr style={{ margin: "30px 0" }} />
          <h3 className="text-xl font-bold mb-4" style={{ color: "black" }}>
            Personal Information
          </h3>
          <div style={{ padding: "10px" }} className="space-y-4">
            {/* Basic Details */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

            <input
              type="text"
              name="college"
              placeholder="College/Institution Name"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {error.college && (
              <p className="text-red-500 text-sm">{error.college}</p>
            )}

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {error.department && (
              <p className="text-red-500 text-sm">{error.department}</p>
            )}

            {/* Year of Study */}
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Year of Study</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
            {error.year && <p className="text-red-500 text-sm">{error.year}</p>}

            {/* Contact Details */}
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <input
              type="number"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {error.contact && (
              <p className="text-red-500 text-sm">{error.contact}</p>
            )}
          </div>

          <hr style={{ margin: "30px 0 20px 0" }} />
          <h3 className="text-xl font-bold" style={{ color: "black" }}>
            Session Feedback
          </h3>
          <div style={{ padding: "10px" }} className="space-y-4">
            {/* Rating */}
            <label className="block font-semibold">
              How would you rate the overall session?
            </label>
            {[
              "⭐⭐⭐⭐⭐ Excellent",
              "⭐⭐⭐⭐ Good",
              "⭐⭐⭐ Average",
              "⭐⭐ Poor",
              "⭐ Very Poor",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  value={option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
            {error.rating && (
              <p className="text-red-500 text-sm">{error.rating}</p>
            )}

            {/* Relevance */}
            <label className="block font-semibold">
              Was the session content relevant to your career needs?
            </label>
            {[
              "Yes, very relevant",
              "Somewhat relevant",
              "Not relevant at all",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="relevance"
                  value={option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
            {error.relevance && (
              <p className="text-red-500 text-sm">{error.relevance}</p>
            )}

            {/* Engagement */}
            <label className="block font-semibold">
              How engaging did you find the session activities (discussions,
              exercises, etc.)?
            </label>
            {["Very engaging", "Engaging", "Neutral", "Not engaging"].map(
              (option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="engagement"
                    value={option}
                    onChange={handleChange}
                  />
                  <span>{option}</span>
                </label>
              )
            )}
            {error.engagement && (
              <p className="text-red-500 text-sm">{error.engagement}</p>
            )}

            {/* Engagement */}
            <label className="block font-semibold">
              Did the session help you clarify your career direction?
            </label>
            {["Yes, definitely", "Somewhat", "No, not at all"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="clarity"
                  value={option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
            {error.clarity && (
              <p className="text-red-500 text-sm">{error.clarity}</p>
            )}

            {/* Confidence */}
            <label className="block font-semibold">
              How confident are you in setting career goals after attending the
              session?
            </label>
            {[
              "Very confident",
              "Somewhat confident",
              "Not confident at all",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="confidence"
                  value={option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
            {error.confidence && (
              <p className="text-red-500 text-sm">{error.confidence}</p>
            )}

            {/* Helpful Parts (Checkboxes) */}
            <label className="block font-semibold">
              Which part of the session did you find most helpful?
            </label>
            {[
              "Self-discovery and personality assessment",
              "Career exploration and industry trends",
              "Decision-making frameworks",
              "Action plan and execution",
              "Networking and mentorship tips",
              "No one",
            ].map((part) => (
              <label key={part} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="helpfulParts"
                  value={part}
                  onChange={handleChange}
                />
                <span>{part}</span>
              </label>
            ))}
            {error.helpfulParts && (
              <p className="text-red-500 text-sm">{error.helpfulParts}</p>
            )}

            {/* Open-Ended Questions */}
            <label className="block font-semibold">
              How do you plan to apply the insights gained from this session?
            </label>
            <textarea
              name="applyInsights"
              placeholder="How do you plan to apply the insights gained from this session?"
              value={formData.applyInsights}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            ></textarea>

            <label className="block font-semibold">
              What aspects of the session would you like to see improved?
            </label>
            <textarea
              name="improvements"
              placeholder="What aspects of the session would you like to see improved?"
              value={formData.improvements}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            ></textarea>

            {/* Recommendation */}
            <label className="block font-semibold">
              Would you recommend this session to others?
            </label>
            {["Yes", "Maybe", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="recommend"
                  value={option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
            {error.recommend && (
              <p className="text-red-500 text-sm">{error.recommend}</p>
            )}

            <label className="block font-semibold">
              Any additional comments or suggestions?
            </label>
            <textarea
              name="comments"
              placeholder="Any additional comments or suggestions?"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold p-2 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
      <Footer />
      <div className="proData">
        <a href="https://cluematrix.com/" target="_blank">
          Product By Cluematrix Techonologies Pvt. Ltd.
        </a>
      </div>
    </main>
  );
};

export default FeedbackForm;
