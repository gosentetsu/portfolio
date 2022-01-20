import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
function DarkModeToggle(props) {
  const [darkTheme, setDarkTheme] = useState(false);

  function switchToggle() {
    setDarkTheme(!darkTheme);
    if (!darkTheme === true) {
      localStorage.theme = "dark";
      document.body.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.body.classList.remove("dark");
    }
  }
  useEffect(() => {
    //default respect to user env set
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkTheme(true);
      localStorage.theme = "dark";
      document.body.classList.add("dark");
    } else {
      //read from local storage
      if (localStorage.theme === "dark") {
        setDarkTheme(true);
        localStorage.theme = "dark";
        document.body.classList.add(localStorage.theme);
      } else {
        setDarkTheme(false);
        localStorage.theme = "light";
      }
    }
  }, []);

  if (props.toggle === true) {
    return (
      <div>
        <div className="flex">
          {/* sun svg */}
          <span>
            <svg
              className={classNames(
                { "text-gray-400": darkTheme },
                { "text-gray-500": !darkTheme },
                "h-6 w-6 "
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          {/* toggle contaner */}
          <div
            className={classNames(
              { "bg-blue-500": darkTheme },
              { "bg-gray-300": !darkTheme },
              "w-14 h-7 flex items-center  rounded-full mx-3 px-1"
            )}
            onClick={switchToggle}
          >
            <div
              className={classNames(
                { "translate-x-7": darkTheme },
                { "-translate-x": !darkTheme },
                "bg-white w-5 h-5 rounded-full shadow-md transition-all ease-in-out"
              )}
            />
          </div>
          <span>
            <svg
              className={classNames(
                { "text-gray-500": !darkTheme },
                { "text-gray-400": darkTheme },
                "h-6 w-6 "
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          onClick={switchToggle}
          className="px-4 py-2 mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform rounded-md dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
        >
          {darkTheme ? (
            <a className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Light Mode</span>
            </a>
          ) : (
            <a className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span>Dark Mode</span>
            </a>
          )}
        </div>
      </div>
    );
  }
}
export default DarkModeToggle;
