import React from "react";
import { RiComputerLine, RiUser3Line, RiChatSmile3Line } from "react-icons/ri";
import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

function NavBar() {
  return (
    <div>
      <header className="flex justify-between w-screen top-0 h-16 bg-gray-900 text-white shadow-lg">
        <div className="flex flex-row items-center">
          <RiComputerLine className="navbar-icon" />
          <p className="navbar-title">WorkStation Store</p>
        </div>
        <nav className="flex flex-row justify-between">
          <SearchWidget />
          <CartWidget />
          <RiChatSmile3Line className="navbar-icon" />
          <RiUser3Line className="navbar-icon" />
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
