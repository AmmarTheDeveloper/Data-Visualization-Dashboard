import { getCurrentTheme } from "@/components/getCurrentTheme";
import { useTheme } from "@/components/theme-provider";
import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

const Likelihood = ({ data }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState();
  useEffect(() => {
    getCurrentTheme(theme, setCurrentTheme);
  }, [theme]);

  const chartData = {
    labels: data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor:
          currentTheme === "light"
            ? "rgba(79, 59, 169, 0.7)"
            : "rgba(144, 104, 190, 0.7)",
        borderColor:
          currentTheme === "light"
            ? "rgba(79, 59, 169, 1)"
            : "rgba(144, 104, 190, 1)",
        borderWidth: 2,
        pointBackgroundColor: currentTheme === "light" ? "white" : "black",
        pointBorderColor:
          currentTheme === "light"
            ? "rgba(79, 59, 169, 1)"
            : "rgba(144, 104, 190, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <div className="py-[6px] pb-[100px] px-[20px] rounded-[20px] mt-[5px] ml-[50px] md:shadow md:shadow-[rgba(0,0,0,0.4)] dark:md:shadow-[rgba(255,255,255,0.5)] max-h-[600px] overflow-hidden">
      <h1 className="text-xl md:text-3xl my-2">Likelihood Chart</h1>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Likelihood;
