import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router";
// import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="lg:px-5 2xl:px-10 py-10 sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="py-10 lg:px-[2rem] 2xl:px-[10rem] w-full overflow-y-scroll">
        {/* <Header /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
