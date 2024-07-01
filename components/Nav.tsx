import Link from "next/link";
import React from "react";

const routes = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];
export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 h-16 w-full font-bold backdrop-blur-md">
      <div className="flex h-full items-center justify-start space-x-6 pl-6 align-middle sm:pl-10">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.name}
            className=" text-slate-400 transition-colors hover:text-slate-300"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
