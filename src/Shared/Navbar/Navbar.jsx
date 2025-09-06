import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const Navbar = () => {
  const navOptions = (
    <>
      <NavLink>
        <li>
          <a>About Me</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Skills</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Portfolio</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a className="bg-white text-black rounded-2xl">Contact Me</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="max-w-screen-lg  mx-auto"> 
      <div className="navbar max-w-screen-lg z-10 absolute bg-transparent text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl">
            <img className="h-[70px]" src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu font-semibold menu-horizontal px-1 gap-10">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};
