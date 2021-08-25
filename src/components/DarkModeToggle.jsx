import classNames from "classnames";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../App";
function DarkModeToggle() {
  const [toggleActive, setToggleActive] = useState(false);
  const themeContetxCallbackFunction = useContext(ThemeContext);

  useEffect(() => {
    themeContetxCallbackFunction(toggleActive);
  }, [toggleActive]);

  function handleActive(params) {
    setToggleActive(!toggleActive);
  }

  return (
    <div>
      <div className="flex">
        {/* sun svg */}
        <span>
          <svg
            className={classNames(
              { "text-gray-400": toggleActive },
              { "text-gray-500": !toggleActive },
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
            { "bg-blue-500": toggleActive },
            { "bg-gray-300": !toggleActive },
            "w-14 h-7 flex items-center  rounded-full mx-3 px-1"
          )}
          onClick={handleActive}
        >
          <div
            className={classNames(
              { "translate-x-7": toggleActive },
              { "-translate-x": !toggleActive },
              "bg-white w-5 h-5 rounded-full shadow-md transition-all ease-in-out"
            )}
          />
        </div>
        {/* moon svg */}
        <span>
          <svg
            className={classNames(
              { "text-gray-500": !toggleActive },
              { "text-gray-400": toggleActive },
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
}
// DarkModeToggle.propTypes = {
//   /**
//    * @param toggleActive
//    * suggesrs the toggle state by a callback function(toggleActive)
//    */
//   callback: PropTypes.func,
// };
export default DarkModeToggle;
