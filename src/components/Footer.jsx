import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center justify-between px-6 py-4 text-gray-300 dark:text-gray-500 sm:flex-row">
        <Link
          to="/"
          className="text-xl font-bold text-gray-400  hover:text-gray-700 dark:hover:text-gray-300"
        >
          gosentetsu
        </Link>

        <p className="py-2   sm:py-0">
          © gosentetsu 2021 - All rights reserved
        </p>

        <div className="flex -mx-2  ">
          Powered &nbsp; <i className="font-serif">by</i>
          <div className="flex pt-1">
            <a
              href="https://vitejs.dev/"
              className="flex mx-2   hover:text-purple-500 "
            >
              <Icon icon="simple-icons:vite" />
            </a>
            <a
              href="https://reactjs.org/"
              className="mx-2   hover:text-blue-500 "
            >
              <Icon icon="akar-icons:react-fill" inline={true} />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="mx-2 hover:text-green-500 "
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
