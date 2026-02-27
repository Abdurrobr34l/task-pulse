import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Analytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    fetch("https://task-api-eight-flax.vercel.app/api/analytics")
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  const labels = analytics.map((a) =>
    new Date(a.date).toLocaleDateString("en-US", { weekday: "short" }).charAt(0)
  );

  const values = analytics.map((a) => a.views);

  const maxValue = Math.max(...values);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderRadius: 50,
        borderSkipped: false,
        backgroundColor: values.map((v) =>
          v === maxValue ? "#14532d" : "#2f855a"
        ),
        hoverBackgroundColor: "#0f3d2a",
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1a5d3e",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#6b7280",
          font: { size: 14 },
        },
      },
      y: {
        display: false,
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="h-full bg-white rounded-3xl p-5.5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Project Analytics
      </h2>

      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;