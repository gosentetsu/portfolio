import React from "react";

export default function Footer() {
  return (
    <footer className="p-10 w-full ease-in-out bg-slate-800 text-slate-400 flex justify-evenly content-around gap-3 flex-wrap">
      <ul className="flex-auto space-y-2">
        <li>Home</li>
        <li>Project</li>
        <li>Blog</li>
      </ul>
      <ul className="flex-auto space-y-2">
        <li>
          <a
            className="duration-500 ease-in-out hover:text-slate-300"
            href="https://github.com/gosentetsu"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="duration-500 ease-in-out hover:text-slate-300"
            href="https://twitter.com/gosentetsu"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="duration-500 ease-in-out hover:text-slate-300"
            href="https://t.me/gosentetsu"
          >
            Telegram
          </a>
        </li>
      </ul>
      <ul className="flex-[2_2_auto] text-slate-500">
        <li className="font-semibold">
          © 2021 - {new Date().getFullYear()} Go Sentetsu
        </li>
        <li>
          Powered by{" "}
          <a
            className="hover:text-slate-400 duration-500 ease-linear"
            href="https://tailwindcss.com/"
          >
            tailwindcss
          </a>{" "}
          and{" "}
          <a
            className="hover:text-slate-400 duration-500 ease-linear"
            href="https://nextjs.org/"
          >
            nextjs
          </a>
        </li>
        <li>
          Hosted on{" "}
          <a
            className="hover:text-slate-400 duration-500 ease-linear"
            href="https://verce.com"
          >
            ▲Vercel
          </a>
        </li>
      </ul>
    </footer>
  );
}
