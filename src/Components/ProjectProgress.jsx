import React from 'react';

const ProjectProgress = () => {
  const progress = 41;

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Project Progress
      </h2>

      <div className="flex flex-col items-center">
        <div className="relative w-56 h-32 overflow-hidden">
          {/* Background semicircle */}
          <div className="absolute w-56 h-56 rounded-full border-18 border-gray-200 top-0"></div>

          {/* Progress semicircle */}
          <div
            className="absolute w-56 h-56 rounded-full border-18 border-primary border-t-transparent border-l-transparent rotate-220 top-0"
            style={{
              clipPath: "inset(0 0 50% 0)",
            }}
          ></div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-4xl font-bold">{progress}%</h3>
          <p className="text-primary text-sm mt-1">Project Ended</p>
        </div>

        <div className="flex gap-6 mt-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Completed
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            In Progress
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;