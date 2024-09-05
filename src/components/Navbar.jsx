import { IoBagOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
          <Link to={"/cart"}>
            <div className="text-3xl mr-4 cursor-pointer">
              <IoBagOutline />
            </div>
          </Link>

          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
