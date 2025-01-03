import React from "react";
import { IoSearch } from "react-icons/io5";
import Avatar from "@mui/joy/Avatar";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Badge } from "@mui/joy";

const QuickActions = () => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <div className="bg-[#F5F5F7] p-2 rounded-s-xl">
              <IoSearch size={23} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-[#F5F5F7] p-2 w-[400px] rounded-e-xl"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-5">
            <div className="bg-[#F5F5F7] p-2 rounded-xl">
              <Badge badgeContent={99} variant="soft" color="warning">
                <HiOutlineBellAlert size={23} />
              </Badge>
            </div>
            <div>
              <Avatar>JG</Avatar>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 pt-5">
        <div className="grid grid-cols-2 gap-2 bg-[#F5F5F7]  rounded-xl">
          <div className="text-end">
            <p className="text-[4.5rem] px-5 py-1 font-bold font-sans ">11</p>
          </div>
          <div className="text-start font-text pt-8">
            Courses <br />
            completed
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 bg-[#F5F5F7]  rounded-xl">
          <div className="text-end">
            <p className="text-[4.5rem] px-5 py-1 font-bold font-sans ">4</p>
          </div>
          <div className="text-start font-text pt-8">
            Courses <br />
            in progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
