import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Icon } from "@iconify/react";
import DarkModeButton from "./DarkModeButton";
import { Link } from "react-router-dom";
function Nav(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //todo: communicate two component for color theme
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleDropdown() {
    setShowDropdown(!showDropdown);
  }

  if (width > 640) {
    return (
      <nav className="sm:flex hidden bg-white  dark:bg-gray-800">
        <div className="container flex items-center justify-between p-6 mx-auto text-gray-600  dark:text-gray-300">
          <Link
            to="/"
            className="flex bg-pink-100 text-pink-700 p-2 rounded bg-opacity-40 hover:bg-opacity-80   dark:bg-pink-200 dark:hover:bg-opacity-90 "
          >
            <Icon
              className="mt-0.5 mr-2 w-5 h-5"
              icon="akar-icons:home"
              inline={true}
            />
            Home
          </Link>
          <div className="space-x-4">
            <Link
              to="/gallery"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Gallery
            </Link>
            <Link
              to="#"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Projects
            </Link>
            <Link
              to="#"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Blog
            </Link>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    );
  } else
    return (
      <nav className="sm:hidden flex">
        {/*  hide dropdown menu while click outside */}
        <button
          onClick={() => setShowDropdown(false)}
          hidden={!showDropdown}
          className="fixed h-screen w-screen bg-gray-50 opacity-30"
        />
        <div className="relative ml-6 mt-6 ">
          <button
            onClick={handleDropdown}
            className="bg-pink-100 text-pink-700 p-2 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-pink-200 dark:hover:bg-opacity-90  md:block"
          >
            <Icon icon="gg:menu-boxed" />
          </button>
          <div
            hidden={!showDropdown}
            className="transition-all duration-500 absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            <Link
              onClick={() => setShowDropdown(false)}
              to="/"
              className="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              <Icon
                className="inline mr-1"
                icon="akar-icons:home"
                inline={true}
              />
              Home
            </Link>
            <hr className="scale-90 my-1" />
            <Link
              onClick={() => setShowDropdown(false)}
              to="/gallery"
              className="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Gallery
            </Link>
            <Link
              onClick={() => setShowDropdown(false)}
              to="projects"
              className="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              onClick={() => setShowDropdown(false)}
              to="/blog"
              className="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Blog
            </Link>
            <hr className="scale-90 my-1" />
            <Link onClick={() => setShowDropdown(false)}>
              <DarkModeButton />
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
