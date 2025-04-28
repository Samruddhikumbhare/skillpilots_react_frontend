import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import AboutSS from "./about/AboutSS";
import Contact from "../Contact/Contact";
import FeedBack from "../Feedback/Feedback";
import Clients from "./Clients/Clients";
import Teams from "./Teams/Teams";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="About Us" />
      <AboutSS />
      {/* <Teams /> */}
      <Contact />
      {/* <FeedBack />
      <Clients /> */}
      <Footer />
      <div className="proData">
        <a href="https://cluematrix.com/" target="_blank">
          Product By Cluematrix Techonologies Pvt. Ltd.
        </a>
      </div>
    </main>
  );
}
