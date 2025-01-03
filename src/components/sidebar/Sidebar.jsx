import React from "react";
import Logo from "../../assets/logo/logo.png";
import { SidebarData } from "./SidebarData";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="relative bg-black lg:w-[100px] 2xl:w-[150px] h-[90vh] px-2 py-4 text-white rounded-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="">
            <img className="w-[50px]" src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center justify-center lg:gap-y-10 2xl:gap-y-16 cursor-pointer ">
          {SidebarData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center text-3xl rounded-3xl"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex  items-center justify-center absolute bottom-5 w-full">
        <div className="text-center text-3xl cursor-pointer">
          <IoIosLogOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
