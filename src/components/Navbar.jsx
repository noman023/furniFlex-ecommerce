import { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { user, logout, totalPrice, cartItems } = useContext(AppContext);
  const itemsCount = cartItems.length;

  const listItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Categories</a>
      </li>
      <li>
        <a>Custom</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </>
  );

  return (
    <nav className="shadow">
      <div className="navbar">
        <div className="navbar-start">
          {/* dropdown nav link for small screens */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {listItems}
            </ul>
          </div>

          {/* logo */}
          <Link to={"/"}>
            <p className="text-xl font-bold cursor-pointer">
              Furni<span className="text-blue-600 ">Flex</span>
            </p>
          </Link>
        </div>

        {/* middle nav links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
        </div>

        {/* nav end */}
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                {/* cart icon */}
                <div className="indicator">
                  <div className="text-3xl cursor-pointer">
                    <IoBagOutline />
                  </div>
                  <span className="badge badge-sm indicator-item mt-6">
                    {itemsCount}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-gray-50 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body text-black font-bold">
                  <p className="text-lg">{itemsCount} Items</p>
                  <p className="text-lg">Subtotal: ${totalPrice}</p>

                  <div className="card-actions">
                    <Link to={"/cart"}>
                      <button className="btn btn-primary btn-block text-white">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* profile section */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-50 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="m-1">
                  <p className="font-bold">
                    {user?.name ?? ""} {user ? user.email : "Not Registered"}
                  </p>
                </li>

                <hr />

                <div className="space-y-1">
                  <li className="hover:bg-black hover:text-white rounded-lg">
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                  <li className="hover:bg-black hover:text-white rounded-lg">
                    <Link to={"/login"}>Sign In</Link>
                  </li>

                  <li
                    onClick={() => logout()}
                    className="hover:bg-black hover:text-white rounded-lg"
                  >
                    <a>Logout</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
