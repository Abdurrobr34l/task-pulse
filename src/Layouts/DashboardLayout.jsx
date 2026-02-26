import React from "react";
import { Outlet } from "react-router";
import {
  FiSearch,
  FiBell,
  FiMail,
  FiPlus,
  FiDownload,
  FiCheckSquare,
  FiCalendar,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiBarChart2,
} from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open p-5 bg-[#ffffff] min-h-screen font-sans">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content flex flex-col">

        {/* NAVBAR */}
        <header className="navbar rounded-[16px] bg-[#f7f7f7] sticky top-0 z-10 px-6 lg:px-10 py-5 border-b border-gray-100">
          <div className="flex-1 gap-4">

            <label
              htmlFor="my-drawer"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              ☰
            </label>

            {/* Search */}
            <div className="relative hidden md:block w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-200" />
              <input
                type="text"
                placeholder="Search task"
                className="w-full pl-11 pr-4 py-3 bg-[#ffffff] rounded-full outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex-none gap-3 flex items-center">
            <button className="w-10 h-10 rounded-full bg-[#ffffff] text-base-200 flex items-center justify-center">
              <FiMail size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#ffffff] text-base-200 flex items-center justify-center">
              <FiBell size={18} />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 ml-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/h1YztPGb/mine-5-modified.webp"
                  alt="avatar"
                />
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-base-200">Totok Michael</p>
                <p className="text-xs text-gray-400">
                  tmichael20@mail.com
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="p-6 lg:p-10 mt-4 bg-[#f7f7f7] rounded-[16px] min-h-screen">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Dashboard
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#14532d] to-[#1f7a4c] text-white text-sm font-medium shadow-md">
                <FiPlus size={16} /> Add Project
              </button>

              <button className="px-6 py-3 rounded-full border border-[#14532d] text-[#14532d] text-sm font-medium">
                Import Data
              </button>
            </div>
          </div>

          <Outlet />
        </main>
      </div>

      {/* SIDEBAR */}
      <aside className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="w-72 min-h-full bg-[#f7f7f7] border-r border-gray-100 rounded-xl p-6 flex flex-col justify-between">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-9 h-9 bg-[#14532d] rounded-xl flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Donezo
              </span>
            </div>

            {/* MENU */}
            <p className="text-xs uppercase text-gray-400 mb-4">Menu</p>

            <ul className="space-y-2 mb-8">
              <li>
                <a className="flex items-center gap-3 bg-[#14532d] text-white py-3 px-4 rounded-xl">
                  <MdOutlineDashboard size={20} />
                  Dashboard
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiCheckSquare size={20} />
                  Tasks
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiCalendar size={20} />
                  Calendar
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiBarChart2 size={20} />
                  Analytics
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiUsers size={20} />
                  Team
                </a>
              </li>
            </ul>

            <p className="text-xs uppercase text-gray-400 mb-4">
              General
            </p>

            <ul className="space-y-2">
              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiSettings size={20} />
                  Settings
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-100">
                  <FiHelpCircle size={20} />
                  Help
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-red-500 hover:bg-red-50">
                  <FiLogOut size={20} />
                  Logout
                </a>
              </li>
            </ul>
          </div>

          {/* Promo Card */}
          <div className="bg-linear-to-br from-[#14532d] to-[#0f3d26] rounded-3xl mt-3 p-6 text-white">
            <FiDownload className="mb-4" />
            <p className="font-semibold text-sm mb-2">
              Download our Mobile App
            </p>
            <p className="text-xs opacity-80 mb-4">
              Get easy in another way
            </p>
            <button className="w-full py-2 rounded-full bg-white text-[#14532d] text-sm font-semibold">
              Download
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;