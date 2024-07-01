import { Metadata } from "next";
import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "@/app/globals.css";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: {
    template: "%s - Gosentetsu's website",
    default: "Home", // a default is required when creating a template
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log();
  return (
    <>
      <html>
        <body>
          <div className="flex min-h-screen flex-col  bg-gradient-to-br from-[#0d1d3a] via-[#1a2f55] to-[#365a83]">
            <Nav></Nav>
            <main className="flex-auto text-slate-400">{children}</main>
            <Footer></Footer>
          </div>
        </body>
      </html>
    </>
  );
}
