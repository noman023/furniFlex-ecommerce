import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFlagUsa,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content px-2 py-5 md:py-10">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div>
          <p className="text-xl font-bold cursor-pointer">
            Furni<span className="text-blue-600 ">Flex</span>
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <nav className="flex flex-col">
            <h6 className="footer-title">About Us</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Explore EEVE</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Community Support</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex gap-3">
          <a href="https://www.facebook.com/98noman/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="https://x.com/noman_1998" target="_blank">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/noman23/" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>

        <div className="flex gap-5">
          <a className="link link-hover">March22 Recap</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">General Terms</a>
          <a className="link link-hover">Contract</a>
        </div>

        <div>
          <p className="flex gap-2 items-center">
            <FaFlagUsa /> Unites States(English)
          </p>
        </div>
      </div>

      <div>
        <p className="text-center mt-3">
          EEVE &copy; 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
