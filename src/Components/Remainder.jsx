import React from 'react';
import { FaVideo } from "react-icons/fa";

const Remainder = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full shadow-md h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Reminders
      </h2>

      <h3 className="text-3xl font-semibold text-brand-deep leading-tight">
        Meeting with Arc Company
      </h3>

      <p className="text-sm text-gray-400 mt-1 mb-4">
        Time : 02.00 pm - 04.00 pm
      </p>

      <button className="text-lg w-full flex items-center justify-center gap-3 py-3 rounded-xl text-white bg-color">
        <FaVideo />
        Start Meeting
      </button>
    </div>
  );
};

export default Remainder;