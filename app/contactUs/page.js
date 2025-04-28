import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import ContactDetail from "./ContactDetail/ContactDetail";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Contact Us" />
      <ContactDetail />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59548.78246903627!2d79.144176!3d21.120582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b96a344ef295%3A0xf7f324a60ae28f0b!2sCluematrix%20Technologies%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1720067201965!5m2!1sen!2sin"
        style={{ width: "100%", height: "300px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
      <div className="proData">
        <a href="https://cluematrix.com/" target="_blank">
          Product By Cluematrix Techonologies Pvt. Ltd.
        </a>
      </div>
    </main>
  );
}
