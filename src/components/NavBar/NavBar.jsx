import React from "react";
import {
  RiComputerLine,
  RiNotification2Line,
  RiUser3Line,
  RiChat3Line,
} from "react-icons/ri";
import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

function NavBar() {
  return (
    <div>
      <header className="flex justify-between w-screen top-0 h-16 bg-gray-900 text-white shadow-lg">
        <div className="flex flex-row items-center">
          <RiComputerLine className="navbar-icon" />
          <p className="navbar-title">
            WorkStationStore
          </p>
        </div>
        <nav className="flex flex-row justify-between">
          <SearchWidget />
          <CartWidget />
          <RiChat3Line className="navbar-icon" />
          <RiNotification2Line className="navbar-icon" />
          <RiUser3Line className="navbar-icon" />
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
