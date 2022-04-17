import React from "react";
import {
  RiComputerLine,
  RiNotification2Line,
  RiUser3Line,
  RiSearchLine,
  RiStore2Line,
  RiChat3Line,
} from "react-icons/ri";

export default function NavBar() {
  return (
    <div>
      <header className="flex justify-between w-screen top-0 h-16 bg-gray-900 text-white shadow-lg">
        <div className="flex flex-row items-center">
          <RiComputerLine className="navbar-icon" />
          <p className="px-1 text-2xl font-bold text-white tracking-wide underline decoration-3 decoration-blue-600">WorkStation</p>
        </div>
        <nav className="flex flex-row justify-between">
          <RiSearchLine className="navbar-icon" />
          <RiStore2Line className="navbar-icon" />
          <RiChat3Line className="navbar-icon" />
          <RiNotification2Line className="navbar-icon" />
          <RiUser3Line className="navbar-icon" />
        </nav>
      </header>
    </div>
  );
}
