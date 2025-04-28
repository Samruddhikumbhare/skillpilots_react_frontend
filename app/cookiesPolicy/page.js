import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import CookiesPolicy from "./CookiesPolicy";


export default function CookiesPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Cookies Policy" />
      <CookiesPolicy />
      <Footer />
    </main>
  );
}
