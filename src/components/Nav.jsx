import React, { useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

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
            href="#"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-16"
          >
            Home
          </a>
          <div>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Gallery
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Projects
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
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
