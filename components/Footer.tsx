import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-wrap content-around justify-evenly gap-3 bg-slate-800 p-10 text-slate-400 ease-in-out">
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
            className="duration-500 ease-linear hover:text-slate-400"
            href="https://tailwindcss.com/"
          >
            tailwindcss
          </a>{" "}
          and{" "}
          <a
            className="duration-500 ease-linear hover:text-slate-400"
            href="https://nextjs.org/"
          >
            nextjs
          </a>
        </li>
        <li>
          Hosted on{" "}
          <a
            className="duration-500 ease-linear hover:text-slate-400"
            href="https://verce.com"
          >
            ▲Vercel
          </a>
        </li>
      </ul>
    </footer>
  );
}
