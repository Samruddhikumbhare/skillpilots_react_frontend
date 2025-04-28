import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import RefundPolicy from "./RefundPolicy";


export default function RefundPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Refund Policy" />
      <RefundPolicy />
      <Footer />
    </main>
  );
}
