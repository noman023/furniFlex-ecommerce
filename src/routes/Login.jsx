import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AppContext } from "../context/AppContext";
import SignAndLoginDesgin from "../components/shared/SignAndLoginDesgin";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email;
    const pass = e.target.pass;

    const userInfo = {
      email: email.value,
      pass: pass.value,
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
      <Link to={"/signup"} className="text-blue-500">
        Sign Up
      </Link>
    </p>
  );

  return (
    <>
      <SignAndLoginDesgin link={link}>
        {/* welcome text */}
        <div className="text-black text-center mb-5">
          <h3 className="text-lg font-bold">Welcome Back!</h3>

          <p className="text-gray-600">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <a href="" className="text-info text-right">
            Forgot Password?
          </a>

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
            Sign In
          </button>
        </form>
      </SignAndLoginDesgin>
    </>
  );
}
