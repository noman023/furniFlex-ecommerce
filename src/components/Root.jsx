import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="container bg-gray-100 text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
