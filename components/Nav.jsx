import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
function Nav(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState(0);
  function handleResize() {
    setWidth(window.innerWidth); //it's ok to put *function* with `window`property here
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Inner setState will re-render the subcomponet DarkModeToggle
    // If the return comonent <DarkModeToggle/> is different, subComponent will re-render
    // the whole componnet rather do `componnetUpdate()`
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleDropdown() {
    setShowDropdown(!showDropdown);
  }

  if (width > 640) {
    return (
      <nav className="container flex items-center justify-between min-w-full p-4 bg-white dark:text-gray-300 dark:bg-gray-800">
        <Link href="/">
          <a className="flex items-center p-2 text-pink-700 bg-pink-100 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-pink-200 dark:hover:bg-opacity-90 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </a>
        </Link>
        <div className="space-x-4">
          <Link href="/gallery">
            <a className="py-2 rounded lg:p-2 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900">
              Gallery
            </a>
          </Link>
          <Link href="/projects">
            <a className="py-2 rounded lg:p-2 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              href=""
              className="py-2 rounded lg:p-2 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-900"
            >
              Blog
            </a>
          </Link>
        </div>
        <DarkModeToggle toggle />
      </nav>
    );
  } else
    return (
      <nav className="flex sm:hidden">
        {/*  hide dropdown menu while click outside */}
        <button
          onClick={() => setShowDropdown(false)}
          hidden={!showDropdown}
          className="fixed w-screen h-screen bg-gray-50 opacity-30"
        />
        <div className="relative mt-6 ml-6 ">
          <button
            onClick={handleDropdown}
            className="p-2 text-pink-700 bg-pink-100 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-pink-200 dark:hover:bg-opacity-90 md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            hidden={!showDropdown}
            className="absolute left-0 w-48 py-2 mt-2 transition-all duration-500 bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            <Link href="/">
              <a
                onClick={() => setShowDropdown(false)}
                className="flex items-center px-4 py-2 mx-2 space-x-1 text-sm text-gray-700 capitalize transition-colors duration-200 transform rounded-md dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </a>
            </Link>
            <hr className="my-1 scale-90" />
            <Link href="/gallery">
              <a
                onClick={() => setShowDropdown(false)}
                className="block px-4 py-2 mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform rounded-md dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                Gallery
              </a>
            </Link>
            <Link href="/projects">
              <a
                onClick={() => setShowDropdown(false)}
                className="block px-4 py-2 mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform rounded-md dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => setShowDropdown(false)}
                className="block px-4 py-2 mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform rounded-md dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                Blog
              </a>
            </Link>

            <hr className="my-1 scale-90" />
            <div onClick={() => setShowDropdown(false)}>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
