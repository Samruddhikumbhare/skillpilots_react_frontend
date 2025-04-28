import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonTopbar from "../CommonTopbar/CommonTopbar";
import Blogs from "./Blogs/Blogs";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CommonTopbar pageName="Blogs" />
      <Blogs />
      <Footer />
    </main>
  );
}
