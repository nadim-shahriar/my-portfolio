import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(true)

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
    <div className="max-w-screen-lg mx-auto">
      <div className="navbar max-w-screen-lg z-10 absolute bg-transparent text-white ">
        <div className="navbar-start px-5 lg:px-0 w-full lg:w-1/2 flex flex-row-reverse justify-between">
        {/* flex flex-row-reverse justify-between */}
  
          <div className="dropdown">
            <button
              onClick={() => {
                console.log("clicked", menuBtn);
                setMenuBtn(!menuBtn);
              }}
              className="btn btn-ghost text-xl lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuBtn ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <RxCross1  className="text-black"/>
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <MdOutlineMenu className="text-black" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <AnimatePresence>
              {menuBtn && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="menu bg-base-100 text-black rounded-box mt-3 p-2 shadow w-52 absolute right-10 lg:hidden"
                >
                  {navOptions}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <a className="text-xl">
            <img className="h-[70px]" src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu font-semibold menu-horizontal px-1 gap-10 font2">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};
