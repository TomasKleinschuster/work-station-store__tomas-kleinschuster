import React from "react";
import { RiComputerLine, RiUser3Line, RiChatSmile3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import CategoryWidget from "./CategoryWidget";
import SearchWidget from "./SearchWidget";

function NavBar() {
  return (
    <div className="flex justify-between w-auto top-0 h-16 bg-gray-900 text-white shadow-xl shadow-zinc-900">
      <div className="flex flex-row items-center">
        <Link to={"/"}>
          <RiComputerLine className="navbar-icon" />
        </Link>
        <p className="navbar-title">WorkStation Store</p>
      </div>
      <nav className="flex flex-row justify-between items-center">
        <SearchWidget />
        <CategoryWidget />
        <Link to={"/"}>
          <CartWidget />
        </Link>
        <Link to={"/"}>
          <RiChatSmile3Line className="navbar-icon" />
        </Link>
        <Link to={"/"}>
          <RiUser3Line className="navbar-icon" />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
