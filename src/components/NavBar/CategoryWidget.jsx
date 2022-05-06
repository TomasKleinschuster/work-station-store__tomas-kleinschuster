import React from "react";
import { RiListCheck } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const CategoryWidget = () => {
  return (
    <>
      <RiListCheck className="navbar-icon" />
      <div className="absolute top-20 bg-black w-48">
        <ul className="flex flex-col p-4 text-center bg-gray-800">
          <li>
            <NavLink
              to={"/category/GraphicsCards"}
              className={(categorySelected) =>
                categorySelected.isActive ? "categoryActive" : "categoryOff"
              }
            >
              Graphics Cards
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/category/Processors"}
              className={(categorySelected) =>
                categorySelected.isActive ? "categoryActive" : "categoryOff"
              }
            >
              Processors
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryWidget;
