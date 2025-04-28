import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import Feature2 from "./Feature2/Feature2";
import Feature3 from "./Feature3/Feature3";

export default function Features() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Features" />
      <Feature3 />
      <Feature2 />

      <Footer />
      <div className="proData">
        <a href="https://cluematrix.com/" target="_blank">
          Product By Cluematrix Techonologies Pvt. Ltd.
        </a>
      </div>
    </main>
  );
}
