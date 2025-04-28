import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import TermsCondition from "./TermsCondition";


export default function TermsConditionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Terms & Conditions" />
      <TermsCondition />
      <Footer />
    </main>
  );
}
