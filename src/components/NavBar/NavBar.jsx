import React from "react";
import {
  RiComputerLine,
  RiNotification2Line,
  RiUser3Line,
  RiSearchLine,
  RiStore2Line,
  RiChat3Line,
} from "react-icons/ri";

/* Test Handler Function */
export default function NavBar() {
  function handleClick(para) {
    console.log("It works!" + para);
  }

  return (
    <div>
      <header className="flex justify-between w-screen top-0 h-16 bg-gray-900 text-white shadow-lg">
        <div className="flex flex-row items-center">
          <RiComputerLine className="navbar-icon" />
          <p className="px-1 text-2xl font-bold text-white tracking-wide underline decoration-3 decoration-blue-600 select-none">
            WorkStationStore
          </p>
        </div>
        <nav className="flex flex-row justify-between">
          <button onClick={() => handleClick(1)}>
            <RiSearchLine className="navbar-icon" />
          </button>
          <button>
            <RiStore2Line className="navbar-icon" />
          </button>
          <button>
            <RiChat3Line className="navbar-icon" />
          </button>
          <button>
            <RiNotification2Line className="navbar-icon" />
          </button>
          <button>
            <RiUser3Line className="navbar-icon" />
          </button>
        </nav>
      </header>
    </div>
  );
}
