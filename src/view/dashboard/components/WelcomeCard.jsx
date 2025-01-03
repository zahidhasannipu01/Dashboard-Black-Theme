import React from "react";
import Illustration from "../../../assets/illustration/Illustration.png";
const WelcomeCard = () => {
  return (
    <div className="p-8 bg-[#F5F5F7] h-[180px] rounded-3xl">
      <div className="flex items-center justify-between relative">
        <div className="pt-5">
          <p className="text-[2.3rem] font-bold font-sans ">Hello Josh!</p>
          <p className="font-text leading-4">It's good to see you again</p>
        </div>
        <div className="absolute right-0 -top-[2.70rem]">
          <img src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
