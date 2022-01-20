import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700">
      <Head>
        <title>GoSenTetsu&#39;s website</title>
        <meta name="author" content="gosentetsu" />
        <meta name="description" content="gosentetsu's portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
