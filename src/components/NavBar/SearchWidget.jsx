import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchWidget = () => {
  return (
    <>
      <RiSearchLine className="navbar-icon" />
      <input type="text" placeholder="Search..." className="search-input" />
    </>
  );
};

export default SearchWidget;
