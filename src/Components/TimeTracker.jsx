import React from 'react';
import { useEffect, useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

const TimeTracker = () => {
const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
 <div className="animate-pulse bg-color rounded-2xl p-6 w-full text-white shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        Time Tracker
      </h2>

      <div className="text-5xl font-bold text-center mb-8">
        {formatTime()}
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => setRunning(!running)}
          className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center shadow-md"
        >
          <FaPause />
        </button>

        <button
          onClick={() => {
            setRunning(false);
            setSeconds(0);
          }}
          className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-md"
        >
          <FaStop className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;