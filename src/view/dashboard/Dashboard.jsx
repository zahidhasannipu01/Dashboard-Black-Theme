import React from "react";
import WelcomeCard from "./components/WelcomeCard";
// import Header from "../../components/header/Header";
import QuickActions from "./components/QuickActions";
import Task from "./components/Task";
import Courses from "./components/Courses";
import WeeklyGraph from "./components/WeeklyGraph";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-2">
          <WelcomeCard />
          <Task />
          <Courses />
        </div>
        <div className="col-span-2 ">
          <QuickActions />
          <WeeklyGraph />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
