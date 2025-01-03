import React from "react";
import Flag from "../../../assets/icons/flag.png";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaArrowLeftLong } from "react-icons/fa6";

ChartJS.register(ArcElement);

const Task = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 2],
        backgroundColor: ["#000000", "#F5F5F7"],
        borderColor: ["#000000", "#F5F5F7"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: "90%",
  };
  return (
    <div className="mt-10 grid grid-cols-5 gap-x-2 w-full">
      <div className="bg-[#F5F5F7] p-2 rounded-xl col-span-4 ">
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex justify-start items-center gap-x-4">
            <div className="bg-white p-2 rounded-xl">
              <img src={Flag} alt="flag" className="w-10 h-10" />
            </div>
            <div>
              <p>Spanish B2</p>
              <p className="text-xs font-text">by Alejandro Velazquez</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-6">
            <div className="w-12 h-12 relative">
              <Doughnut data={data} options={options} />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-text">
                83%
              </p>
            </div>
            <div className="w-full">
              <button className="px-4 py-2 bg-black text-white w-full rounded-xl">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <div className="w-10 h-10 border-2 border-black rounded-full flex justify-center items-center cursor-pointer">
          <FaArrowLeftLong />
        </div>
        <div className="w-10 h-10 border-2 border-black rounded-full flex justify-center items-center rotate-180 cursor-pointer">
          <FaArrowLeftLong />
        </div>
      </div>
    </div>
  );
};

export default Task;
