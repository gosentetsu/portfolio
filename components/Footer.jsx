import React from "react";
import Link from "next/link";
import {
  Nextdotjs,
  ReactJs,
  Tailwindcss,
} from "@icons-pack/react-simple-icons";
function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center justify-between px-6 py-4 text-gray-300 dark:text-gray-500 sm:flex-row">
        <div className="text-xl font-semibold text-gray-400 ">gosentetsu</div>

        <p className="py-2 sm:py-0">
          © gosentetsu 2021 - {new Date().getFullYear()} All rights reserved
        </p>

        <div className="flex items-center italic ">
          Powered by
          <div className="flex items-center pb-2 ">
            <a
              href="https://nextjs.org/"
              className="flex w-4 h-4 mx-1 hover:text-gray-900 "
            >
              <Nextdotjs />
            </a>
            <a
              href="https://reactjs.org/"
              className="flex w-4 h-4 mx-1 hover:text-blue-500 "
            >
              <ReactJs />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="flex w-4 h-4 mx-1 hover:text-green-500 "
            >
              <Tailwindcss />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
