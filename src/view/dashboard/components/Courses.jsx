import React from "react";
import CourseData from "./data/courses.json";
import { FaClock } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";

const Courses = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="py-5">
          <p className="text-3xl font-sans ">Courses</p>
        </div>
        <div className="flex justify-start items-center gap-x-4 py-3">
          <div className="text-xl font-sans">
            <p>All Courses</p>
          </div>
          <div className="text-xl font-sans text-gray-400">
            <p>The Newest</p>
          </div>
          <div className="text-xl font-sans text-gray-400">
            <p>Top Rated</p>
          </div>
          <div className="text-xl font-sans text-gray-400">
            <p>Most Popular</p>
          </div>
        </div>
        <div>
          {CourseData.map((course, index) => {
            return (
              <div key={index} className="pb-8">
                <div className="grid grid-cols-4 gap-x-2 bg-[#F5F5F7] px-4 py-2 rounded-xl">
                  <div className="flex justify-start items-center gap-x-5 col-span-2">
                    <div className="bg-white p-2 rounded-xl w-14 h-14">
                      <img src={course.icon} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>{course.title}</p>
                        <p className="font-text">{course.created_by}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-x-5">
                    <div className="flex justify-start items-center gap-x-2">
                      <FaClock />
                      <p className="font-text text-sm">{course.duration}</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <FaFireFlameCurved />
                      <p className="font-text text-sm">{course.rating}</p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <button className="px-4 py-2 rounded-xl border-2 lg:text-sm 2xl:text-lg border-black ">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
