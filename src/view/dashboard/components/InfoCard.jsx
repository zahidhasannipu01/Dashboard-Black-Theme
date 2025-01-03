import React from "react";
import Brain from "../../../assets/icons/book.png";
const InfoCard = () => {
  return (
    <div className="mt-10">
      <div className="px-5 py-5 bg-[#F5F5F7] h-[180px] rounded-3xl">
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex justify-start items-center">
            <div>
              <p className="text-2xl font-sans">Learn even more!</p>
              <p className="text-sm font-text leading-0">
                Unlock premium features <br />
                only for $9.99 per month.
              </p>
              <div className="mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img src={Brain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
