import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="container bg-gray-100 text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
