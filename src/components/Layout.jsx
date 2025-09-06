import React from "react";
import Navbar from "./Navbar"; // use your Navbar or the one we created earlier
import "../pages/Shop.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-container">{children}</main>
    </>
  );
}
