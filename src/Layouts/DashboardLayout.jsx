import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { FiSearch, FiBell, FiMail, FiPlus, FiDownload, FiCheckSquare, FiCalendar, FiUsers, FiSettings, FiHelpCircle, FiLogOut, FiBarChart2, } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "/logo.png";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="drawer lg:drawer-open p-5 bg-[#ffffff] min-h-screen font-sans">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content flex flex-col">

        {/* NAVBAR */}
        <header className="navbar rounded-2xl bg-[#f7f7f7] sticky top-0 z-10 p-6 border-b border-gray-100">
          <div className="flex-1 flex-row gap-4">

            <label
              htmlFor="my-drawer"
              className="btn btn-ghost drawer-button lg:hidden bg-brand-primary rounded-lg"
            >
              ☰
            </label>

            {/* Search */}
            <div className="relative hidden md:block w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-200" />
              <input
                type="text"
                placeholder="Search task"
                className="w-full pl-11 pr-4 py-3 bg-[#ffffff] text-gray-800 rounded-full outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex-none gap-3 flex items-center ml-5">
            <button className="icon-hover w-10 h-10 rounded-full bg-[#ffffff] text-base-200 flex items-center justify-center">
              <FiMail size={18} />
            </button>
            <button className="icon-hover w-10 h-10 rounded-full bg-[#ffffff] text-base-200 flex items-center justify-center">
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
              <div className="text-left hidden sm:block">
                <p className="text-md font-bold text-base-200 capitalize">{user?.email?.split("@")[0] || "User"}</p>
                <p className="text-xs text-gray-600">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="p-6 mt-4 bg-[#f7f7f7] rounded-2xl min-h-screen">
          <div className="flex flex-col gap-3 mb-8 xl:flex-row xl:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Dashboard
              </h1>
              <p className="text-gray-400 text-lg mt-1">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-color btn-hover flex items-center gap-2 px-4 py-4 rounded-full text-white text-md font-medium shadow-md md:px-6 xl:h-12.5">
                <FiPlus size={16} /> Add Project
              </button>

              <button className="btn-hover px-4 py-2 rounded-full border border-brand-primary text-brand-primary text-md font-medium hover:cursor-pointer md:px-6 xl:h-12.5">
                Import Data
              </button>
            </div>
          </div>

          <Outlet />
        </main>
      </div>

      {/* SIDEBAR */}
      <aside className="drawer-side mr-4">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="w-72 min-h-full bg-[#f7f7f7] ml-4 mt-4 border-r border-gray-100 rounded-xl! p-6 flex flex-col justify-between xl:ml-0 xl:mt-0">

          {/* Logo */}
          <div>
            <Link to={"/"} className="flex items-center gap-3 mb-12">
              <div className="w-16 h-16">
                <img src={Logo} alt="It is website logo " />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Task Pulse
              </span>
            </Link>

            {/* MENU */}
            <p className="text-md font-semibold uppercase text-gray-400 mb-4">Menu</p>

            <ul className="space-y-2 mb-8">
              <li>
                <a className="flex items-center gap-3 bg-brand-primary text-white py-3 px-4 rounded-xl">
                  <MdOutlineDashboard size={20} />
                  Dashboard
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiCheckSquare size={20} />
                  Tasks
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiCalendar size={20} />
                  Calendar
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiBarChart2 size={20} />
                  Analytics
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiUsers size={20} />
                  Team
                </a>
              </li>
            </ul>

            <p className="text-md font-semibold uppercase text-gray-400 mb-4">
              General
            </p>

            <ul className="space-y-2">
              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiSettings size={20} />
                  Settings
                </a>
              </li>

              <li>
                <a className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-200">
                  <FiHelpCircle size={20} />
                  Help
                </a>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl text-red-500 transition-colors duration-300 ease-linear hover:bg-red-100 w-full text-left"
                >
                  <FiLogOut size={20} />
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Promo Card */}
          <div className="bg-linear-to-br from-brand-primary to-brand-deep rounded-3xl mt-3 p-6 text-white">
            <div className="inline-block border p-2 rounded-full text-brand-primary bg-white">
              <FiDownload size={18} />
            </div>
            <p className="font-medium text-2xl mb-2">
              Download our Mobile App
            </p>
            <p className="text-md opacity-80 mb-4">
              Get easy in another way
            </p>
            <button className="w-full py-2 rounded-full bg-white text-brand-primary text-sm font-semibold transition-colors duration-300 ease-linear hover:bg-transparent hover:text-white hover:outline-1 hover:outline-white">
              Download
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;