import React from "react";
import { RiComputerLine, RiUser3Line, RiChatSmile3Line } from "react-icons/ri";
import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

function NavBar() {
  return (
    <div className="flex justify-between w-auto top-0 h-16 bg-gray-900 text-white shadow-xl shadow-zinc-900">
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
    </div>
  );
}

export default NavBar;
