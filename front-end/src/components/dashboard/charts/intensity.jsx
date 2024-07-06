import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const IntensityChart = ({ data }) => {
  const intensityData = data.map((val, i) => val.intensity);
  const startYearData = data.map((val, i) => val.start_year);

  const getColor = (value) => {
    const hexCodes = [
      "#7F00FF", // purple
      "#F2B93B", // Yellow
      "#FF8000", // Orange
      "#FF453A", // Red
    ];
    const maxRatio = Math.max(...intensityData) / 4;
    if (value < maxRatio) {
      return hexCodes[0];
    } else if (value < maxRatio * 2) {
      return hexCodes[1];
    } else if (value < maxRatio * 3) {
      return hexCodes[2];
    } else {
      return hexCodes[3];
    }
  };

  const chartData = {
    labels: startYearData,
    datasets: [
      {
        label: "Intensity",
        data: intensityData,
        backgroundColor: intensityData.map((val) => getColor(val)),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: true,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "start",
        offset: -20,
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value) => value + "%",
        shadowBlur: 10,
        shadowColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
          callback: (value) => value + "%",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-xl md:text-3xl  my-2">Intensity</h1>
        <Bar
          data={chartData}
          options={chartOptions}
          plugins={[ChartDataLabels]}
        />
      </div>
    </>
  );
};

export default IntensityChart;
