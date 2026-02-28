import React from "react";
import Overview from "../Components/Overview";
import Analytics from "../Components/Analytics";
import Remainder from "../Components/Remainder";
import ProjectProgress from "../Components/ProjectProgress";
import TimeTracker from "../Components/TimeTracker";
import User from "../Components/User";
import Products from "../Components/Products";

const Dashboard = () => {
  return (
    <div
      className="
          grid gap-3
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          2xl:grid-cols-8
          2xl:auto-rows-auto
        "
    >

      {/* Overview */}
      <div
        className="
            sm:col-span-2
            lg:col-span-4
            2xl:col-span-8 2xl:row-span-2
          "
      >
        <Overview />
      </div>

      {/* Analytics */}
      <div
        className="
            sm:col-span-2
            lg:col-span-2
            2xl:col-span-3 2xl:row-span-2 2xl:row-start-3
          "
      >
        <Analytics />
      </div>

      {/* Remainder */}
      <div
        className="
            sm:col-span-1
            lg:col-span-2
            2xl:col-span-3 2xl:row-span-2 2xl:col-start-4 2xl:row-start-3
          "
      >
        <Remainder />
      </div>

      {/* Products */}
      <div
        className="
            sm:col-span-1
            lg:col-span-4
            2xl:col-span-2 2xl:row-span-4 2xl:col-start-7 2xl:row-start-3
          "
      >
        <Products />
      </div>

      {/* Time Tracker */}
      <div
        className="
            sm:col-span-2
            lg:col-span-4
            2xl:col-span-2 2xl:row-span-2 2xl:col-start-7 2xl:row-start-6
          "
      >
        <TimeTracker />
      </div>

      {/* User */}
      <div
        className="
            sm:col-span-1
            lg:col-span-4
            2xl:col-span-3 2xl:row-span-3 2xl:col-start-1 2xl:row-start-5
          "
      >
        <User />
      </div>

      {/* Project Progress */}
      <div
        className="
            sm:col-span-1
            lg:col-span-4
            2xl:col-span-3 2xl:row-span-3 2xl:col-start-4 2xl:row-start-5
          "
      >
        <ProjectProgress />
      </div>

    </div>
  );
};

export default Dashboard;