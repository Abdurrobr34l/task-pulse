import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import Skeleton from "../Utilities/Skeleton";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Analytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch(
          "https://task-api-eight-flax.vercel.app/api/analytics"
        );
        if (!res.ok) throw new Error("Failed to fetch analytics");

        const data = await res.json();
        setAnalytics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  // Fix: Use proper weekday labels
  const labels =
    analytics.length > 0
      ? analytics.map((a) =>
          new Date(a.date).toLocaleDateString("en-US", { weekday: "short" })
        )
      : [];

  const values = analytics.length > 0 ? analytics.map((a) => a.views) : [];

  const activeIndex = values.length ? values.indexOf(Math.max(...values)) : -1;

  // Stripe pattern
  const createStripePattern = (ctx) => {
    const canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 8;
    const patternCtx = canvas.getContext("2d");

    patternCtx.fillStyle = "#cbd5e1";
    patternCtx.fillRect(0, 0, 4, 8);

    return ctx.createPattern(canvas, "repeat");
  };

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderRadius: 999,
        borderSkipped: false,
        barThickness: 40,
        backgroundColor: (context) => {
          const { chart, dataIndex } = context;
          const ctx = chart.ctx;

          if (dataIndex === activeIndex) {
            return "#14532d";
          }

          return createStripePattern(ctx);
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#6b7280", font: { size: 14 } },
      },
      y: {
        display: false,
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  if (isLoading) {
    return (
      <div className="h-full bg-white rounded-3xl p-6">
        <Skeleton className="h-6 w-48 mb-6" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full bg-white rounded-3xl p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="card-hover h-full bg-white rounded-3xl p-5.5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Project Analytics
      </h2>
      <div>
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;