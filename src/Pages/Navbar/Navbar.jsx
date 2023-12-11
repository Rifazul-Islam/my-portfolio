import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-red-600" : " "
          }
        >
          Home
        </NavLink>
      </li>
      <li className="duration-1000">
        {" "}
        <a href="#skills"> Skills</a>{" "}
      </li>
      <li className="">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-red-600" : " "
          }
        >
          ContactMe
        </NavLink>
      </li>
      <li className="duration-1000">
        {" "}
        <a href="#about"> AboutMe</a>{" "}
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "border-red-600 border-b-2 " : " "
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-zinc-900">
        <div className="navbar flex-1">
          <div className="avatar ml-5">
            <div className="w-10 mb-2 rounded-full ring ring-gray-400 ">
              <img src={logo} alt="" />
            </div>
          </div>
          <span className="text-white ml-3"> INBIO </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="text-center space-x-3 menu-horizontal p-0 text-white ">
            {menuItems}

            {/* <li>
              {" "}
              <Link to={pdf} target="_blank">
                {" "}
                <button className="btn btn-sm">Resume DownLoad </button>{" "}
              </Link>{" "}
            </li> */}
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost flex justify-around lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content mt-3 space-y-2  space-x-3 mx-auto text-center  p-1 shadow  rounded-box  bg-black text-white "
          >
            {menuItems}

            <li> {/* <a href={pdf}> DownLoad </a>{" "} */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
