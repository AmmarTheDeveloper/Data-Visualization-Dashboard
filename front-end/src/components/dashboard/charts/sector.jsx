import React from "react";
import { Pie } from "react-chartjs-2";

const Sector = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  return (
    <div className="py-[6px] pb-[100px] px-[20px] rounded-[20px] mt-[5px] ml-[50px] md:shadow md:shadow-[rgba(0,0,0,0.4)] dark:md:shadow-[rgba(255,255,255,0.5)] max-h-[600px] overflow-hidden">
      <h1 className="text-xl md:text-3xl my-2">Sector Chart</h1>

      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default Sector;
