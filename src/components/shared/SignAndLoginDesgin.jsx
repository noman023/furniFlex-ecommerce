import { FaApple, FaGoogle } from "react-icons/fa";

import appIcon from "../../../public/icon.png";

export default function SignAndLoginDesgin({ children, link }) {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between"
      style={{
        backgroundImage: `url('../../../public/chair.png')`,
      }}
    >
      <div className="md:w-1/2 bg-white p-3 md:p-20">
        <div className="bg-gray-100 py-8 px-3 rounded-md">
          {children}

          <div className="divider">OR</div>

          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <button className="btn btn-info text-white">
              <FaGoogle /> Sign in with Google
            </button>
            <button className="btn btn-success border text-white">
              <FaApple /> Sign in with Apple
            </button>
          </div>

          {link}
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center p-5">
        <div className="max-w-[450px] text-center">
          <div className="flex flex-col items-center gap-1">
            <img src={appIcon} alt="app icon" className="w-20 h-20" />

            <p className="text-xl text-white font-bold cursor-pointer">
              Furni<span className="text-blue-600 ">Flex</span>
            </p>
          </div>

          <p className="text-gray-400 mt-1">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
}
