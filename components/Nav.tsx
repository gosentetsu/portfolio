import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 h-16 w-full backdrop-blur-md font-bold">
      <div className="flex h-full items-center justify-start space-x-6 pl-6 sm:pl-10 align-middle">
        <Link href="/">
          <a className=" text-slate-400 transition-colors hover:text-slate-300">
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className=" text-slate-400 transition-colors hover:text-slate-300">
            Projects
          </a>
        </Link>
        <Link href="/blog">
          <a className=" text-slate-400 transition-colors hover:text-slate-300">
            Blog
          </a>
        </Link>
      </div>
    </nav>
  );
}
