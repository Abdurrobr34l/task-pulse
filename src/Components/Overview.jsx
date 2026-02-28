import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Overview = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://task-api-eight-flax.vercel.app/api/overview"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const result = await response.json();

        console.log(result);

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="rounded-3xl p-6 bg-white animate-pulse">
            <div className="flex justify-between items-start">
              <div className="h-6 w-24 skeleton"></div>
              <div className="w-10 h-10 rounded-full skeleton"></div>
            </div>
            <div className="mt-4 h-12 w-20 skeleton"></div>
            <div className="mt-4 h-4 w-32 skeleton"></div>
          </div>
        ))}
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  const cards = data
    ? [
      {
        title: "Total Users",
        value: data.totalUsers,
        change: "▲ Active users overview",
      },
      {
        title: "Active Users",
        value: data.activeUsers,
        change: "▲ Currently active",
      },
      {
        title: "Revenue",
        value: `$${data.revenue.toLocaleString()}`,
        change: "▲ Monthly revenue",
      },
      {
        title: "Growth",
        value: `${data.growth}%`,
        change: "▲ Growth rate",
      },
    ]
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">

      {
        cards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-6 text-[#131313] bg-white transition-all duration-500 ease-linear hover:-translate-y-2 hover:shadow-2xl hover:bg-[linear-gradient(350deg,#1f6f4a,#0f3d2a)] hover:text-white">
            <div className="flex justify-between items-start">
              <p className="text-xl font-bold opacity-90">
                {card.title}
              </p>

              <button
                className="w-10 h-10 rounded-full text-brand-deep border flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white/20 icon-hover">
                <FiArrowUpRight size={18} />
              </button>
            </div>

            <h2 className="text-5xl font-bold mt-4 transition-all duration-500 group-hover:[text-shadow:0_0_35px_#6cd823] xl:text-4xl 2xl:text-5xl">
              {card.value}
            </h2>

            <p className="text-sm font-medium mt-4 text-brand-primary/80 transition-all duration-500 group-hover:text-[#6cd823]">
              {card.change}
            </p>
          </div>
        ))}

    </div>
  );
};

export default Overview;