import React from "react";
import { Icon } from "@iconify/react";
function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
        <a
          href="#"
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          gosentetsu
        </a>

        <p className="py-2 text-gray-800 dark:text-white sm:py-0">
          © gosentetsu 2021 - All rights reserved
        </p>

        <div className="flex -mx-2 text-gray-600 dark:text-gray-300">
          Powered &nbsp; <i className="font-serif">by</i>
          <div className="flex pt-1">
            <a
              href="https://vitejs.dev/"
              className="flex mx-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-gray-300"
            >
              <Icon icon="simple-icons:vite" />
            </a>
            <a
              href="https://reactjs.org/"
              className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gray-300"
            >
              <Icon icon="akar-icons:react-fill" inline={true} />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="mx-2 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-gray-300"
            >
              <Icon icon="file-icons:tailwind" inline={true} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
