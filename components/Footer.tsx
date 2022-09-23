import React from "react";

export default function Footer() {
  return (
    <footer className="p-10 w-full bg-slate-800 text-slate-400 flex justify-evenly ">
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Project</li>
      </ul>
      <ul>
        <li>Github</li>
        <li>Telegram</li>
        <li>Twitter</li>
      </ul>
      <ul>
        <li>Powered by tailwindcss and nextjs</li>
        <li>Hosted on Vercel</li>
      </ul>
    </footer>
  );
}
