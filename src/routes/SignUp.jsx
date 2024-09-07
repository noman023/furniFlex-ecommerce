import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AppContext } from "../context/AppContext";
import SignAndLoginDesgin from "../components/shared/SignAndLoginDesgin";

export default function SignUp() {
  const { login } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email;
    const pass = e.target.pass;
    const firstName = e.target.fName;
    const lastName = e.target.lName;

    const userInfo = {
      email: email.value,
      pass: pass.value,
      name: firstName.value + " " + lastName.value,
    };

    login(userInfo);
    navigate(location?.state ?? "/");
  };

  const hanldeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const link = (
    <p className="text-center mt-4">
      Have an account?{" "}
      <a href="/login" className="text-blue-500">
        Sign In
      </a>
    </p>
  );

  return (
    <SignAndLoginDesgin link={link}>
      {/* welcome text */}
      <div className="text-black text-center mb-5">
        <h3 className="text-lg font-bold">Welcome To</h3>

        <h1 className="text-2xl font-bold cursor-pointer">
          Furni<span className="text-blue-600 ">Flex</span>
        </h1>

        <p className="text-gray-600">
          Signup for purchase your desire products.
        </p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            name="fName"
            placeholder="First Name(optional)"
            className="input input-bordered w-full bg-slate-50"
          />

          <input
            type="text"
            name="lName"
            placeholder="Last Name(optional)"
            className="input input-bordered w-full bg-slate-50"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input input-bordered w-full bg-slate-50"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="pass"
            placeholder="Password"
            className="input input-bordered w-full bg-slate-50"
            required
          />

          {showPassword ? (
            <FaEye
              onClick={hanldeShowPassword}
              className="absolute right-2 bottom-3 text-xl cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={hanldeShowPassword}
              className="absolute right-2 bottom-3 text-xl cursor-pointer"
            />
          )}
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />

          <span>
            I agree to the <a href="">Terms & policy</a>
          </span>
        </div>
        <button type="submit" className="btn text-white">
          Signup
        </button>
      </form>
    </SignAndLoginDesgin>
  );
}
