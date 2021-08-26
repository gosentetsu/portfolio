import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { Icon } from "@iconify/react";
export default function DarkModeButton() {
  const themeContetxCallbackFunction = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    themeContetxCallbackFunction(isActive);
  }, [isActive]);
  function handleActive() {
    setIsActive(!isActive);
  }
  return (
    <div>
      {!isActive ? (
        <div
          onClick={handleActive}
          class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
        >
          <Icon
            icon="bx:bxs-moon"
            inline={true}
            className="inline-block mr-1"
          />
          Dark Mode
        </div>
      ) : (
        <div
          onClick={handleActive}
          class="block px-4 py-2 rounded-md mx-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
        >
          <Icon
            icon="akar-icons:sun-fill"
            className="inline-block mr-1"
            inline={true}
          />
          Light Mode
        </div>
      )}
    </div>
  );
}
