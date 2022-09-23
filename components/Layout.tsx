import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-br from-[#0d1d3a] via-[#1a2f55] to-[#365a83]">
      <Nav></Nav>
      <main className="flex-auto">{props.children}</main>
      <Footer></Footer>
    </div>
  );
}
