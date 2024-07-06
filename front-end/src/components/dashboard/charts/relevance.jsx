import React from "react";
import { Bubble } from "react-chartjs-2";

const Relevance = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
        })),
      },
      {
        label: "Intensity",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Impact",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div
      className="m-[50px] p-[4px] mt-[8px] rounded-[18px]"
      style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <h1 className="text-xl md:text-3xl my-2">Relevance Chart</h1>
      <Bubble data={chartData} options={chartOptions} />
    </div>
  );
};

export default Relevance;
