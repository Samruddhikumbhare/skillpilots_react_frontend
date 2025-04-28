"use client";
import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import DashActivity from "./DashActivity/DashActivity";
import Feature from "./Feature/Feature";
import FeedBack from "./Feedback/Feedback";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import PricingPlan from "./PricingPlan/PricingPlan";
import SoftwareSS from "./SoftwareSS/SoftwareSS";
import TopBarData from "./TopBarData/TopBarData";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./Loading";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("initialLoadDone")) {
      setLoader(false);
    }
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loader) {
      sessionStorage.setItem("initialLoadDone", "true");
    }
  }, [loader]);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Navbar />
          <TopBarData />
          <Feature />
          <DashActivity />
          <SoftwareSS />
          <PricingPlan />
          <Contact />
          {/* <FeedBack /> */}
          <Footer />
          <div className="proData">
            <a href="https://cluematrix.com/" target="_blank" >Product By Cluematrix Techonologies Pvt. Ltd.</a>
          </div>
        </main>
      )}
    </>
  );
}
