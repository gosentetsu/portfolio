import React, { useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Icon } from "@iconify/react";
function Nav() {
  const [darkMode, setDarkMode] = useState("light");
  function handleDark(toggleActive) {
    console.log("darkMode:" + toggleActive);
    setDarkMode(toggleActive ? "dark" : "light");
  }
  return (
    <div>
      <nav className="bg-white  dark:bg-gray-800">
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
          <DarkModeToggle callback={handleDark}></DarkModeToggle>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
