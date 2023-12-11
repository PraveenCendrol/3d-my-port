import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <NavLink
        to={"/"}
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">PKB</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? "text-blue-500" : "text-black-500";
          }}
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) => {
            return isActive ? "text-blue-500" : "text-black-500";
          }}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
