import React from "react";

const ProjectProgress = () => {
  // Data
  const completed = 30;
  const inProgress = 11;
  const total = completed + inProgress; // 41%

  // Gauge settings
  const radius = 160;
  const stroke = 80;
  const normalizedRadius = radius - stroke / 220;
  const circumference = Math.PI * normalizedRadius;

  // Length calculations
  const completedLength = (completed / 100) * circumference;
  const inProgressLength = (inProgress / 100) * circumference;

  return (
    <div className="flex flex-col justify-center h-full bg-white rounded-2xl p-6 w-full shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Project Progress
      </h2>

      <div className="flex flex-col items-center">
        <svg
          height="190"
          width="160"
          viewBox="0 0 260 190"
          className="overflow-visible"
        >
          <defs>
            <pattern
              id="diagonalStripes"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="8" fill="#cbd5e1" />
            </pattern>
          </defs>

          {(() => {
            const centerX = 130;
            const centerY = 160;
            const startX = centerX - normalizedRadius;
            const endX = centerX + normalizedRadius;
            const arcPath = `
              M ${startX} ${centerY}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${endX} ${centerY}
            `;

            return (
              <>
                {/* 1 Pending (Full Striped Background) */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke="url(#diagonalStripes)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                />

                {/* 2 Completed (Light Green) */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke="#2f855a"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${completedLength} ${circumference}`}
                />

                {/* 3 In Progress (Dark Green) */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke="#14532d"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${inProgressLength} ${circumference}`}
                  // strokeDashoffset={-completedLength}
                />
              </>
            );
          })()}
        </svg>

        <div className="-mt-24 text-center">
          <h3 className="text-6xl font-bold text-gray-800">
            {total}%
          </h3>
          <p className="text-brand-primary text-sm mt-1">
            Project Ended
          </p>
        </div>

        <div className="flex gap-6 mt-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2f855a]"></span>
            Completed
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-900"></span>
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