import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const path2title = (path: string) => {
  return (
    path
      .split("/")
      .filter((s) => s !== "")
      .reverse()
      .join(" • ")
      .replace(/\b\w/, (s) => s.toUpperCase()) || "Home"
  );
};
export default function Layout(props: Props) {
  const router = useRouter();
  const title = path2title(router.pathname);
  return (
    <>
      <Head>
        <title>{title} • Go Sentetsu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A gosentetsu's portfolio website." />
      </Head>
      <div className="min-h-screen flex flex-col  bg-gradient-to-br from-[#0d1d3a] via-[#1a2f55] to-[#365a83]">
        <Nav></Nav>
        <main className="flex-auto text-slate-400">{props.children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
