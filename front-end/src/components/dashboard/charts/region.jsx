import React from "react";
import { Doughnut } from "react-chartjs-2";

const RegionChart = ({ data }) => {
  const regionCounts = {};
  data.forEach((item) => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl my-2">Region Distribution</h1>
      <Doughnut data={chartData} />
    </>
  );
};

export default RegionChart;
