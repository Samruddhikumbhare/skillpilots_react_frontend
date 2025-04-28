import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import PrivacyPolicy from "./PrivacyPolicy";


export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Privacy Policy" />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
