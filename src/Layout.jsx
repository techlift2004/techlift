import React from "react";
import Nav from "./layout/nav/nav";
import Footer from "./layout/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1500px] mx-auto bg-gradient-to-tl to-[#ECD3FF]/3 from-[#4B0081]/7 ">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
