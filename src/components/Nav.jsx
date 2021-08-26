import React, { useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Icon } from "@iconify/react";
import DarkModeButton from "./DarkModeButton";
function Nav(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  //todo communicate two component for color theme
  function handleDropdown() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div>
      {/* nav for desktop */}
      <nav className="sm:flex hidden bg-white  dark:bg-gray-800">
        <div className="container flex items-center justify-between p-6 mx-auto text-gray-600  dark:text-gray-300">
          <a
            href="/"
            className="flex bg-pink-100 text-pink-700 p-2 rounded bg-opacity-40 hover:bg-opacity-80  md:flex dark:bg-pink-200 dark:hover:bg-opacity-90 "
          >
            <Icon
              className="mt-0.5 mr-2 w-5 h-5"
              icon="akar-icons:home"
              inline={true}
            />
            Home
          </a>
          <div className="space-x-4">
            <a
              href="/gallery"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Gallery
            </a>
            <a
              href="#"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Projects
            </a>
            <a
              href="#"
              className=" lg:p-2 py-2 rounded  lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Blog
            </a>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
      {/* nav for mobile */}
      <nav className="sm:hidden flex">
        {/*  hide dropdown menu while click outside */}
        <button
          onClick={() => setShowDropdown(false)}
          hidden={!showDropdown}
          className="fixed h-screen w-screen bg-gray-50 opacity-50"
        ></button>
        <div class="relative ml-6 mt-6 ">
          <button
            onClick={handleDropdown}
            className="bg-pink-100 text-pink-700 p-2 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-pink-200 dark:hover:bg-opacity-90  md:block"
          >
            <Icon icon="gg:menu-boxed" />
          </button>
          <div
            hidden={!showDropdown}
            class="transition-all duration-500 absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            <a
              onClick={() => setShowDropdown(false)}
              href="/"
              class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              <Icon
                className="inline mr-1"
                icon="akar-icons:home"
                inline={true}
              />
              Home
            </a>
            <hr className="scale-90 my-1" />
            <a
              onClick={() => setShowDropdown(false)}
              href="/gallery"
              class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Gallery
            </a>
            <a
              onClick={() => setShowDropdown(false)}
              href="projects"
              class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Projects
            </a>
            <a
              onClick={() => setShowDropdown(false)}
              href="/blog"
              class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Blog
            </a>
            <hr className="scale-90 my-1" />

            <div onClick={() => setShowDropdown(false)}>
              <DarkModeButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
