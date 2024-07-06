import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@/components/theme-provider";
import { getCurrentTheme } from "@/components/getCurrentTheme";

const Country = ({ data }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState();
  useEffect(() => {
    getCurrentTheme(theme, setCurrentTheme);
  }, [theme]);

  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    );

    const sectors = {};
    countryData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map((sector) => sectors[sector]);

    const chartBackgroundColor = "rgba(79, 59, 169, 0.7)";

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedCountry, data, currentTheme]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          color: currentTheme === "light" ? "#ccc" : "#282828",
        },
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div
      className={`p-[6px] m-[50px] md:shadow md:shadow-[rgba(0,0,0,0.4)] rounded dark:md:shadow-[rgba(255,255,255,0.5)] ${
        currentTheme === "dark" ? "bg-[grey]" : "bg-[white]"
      }`}
    >
      <div className="flex flex-col mx-auto">
        <h1 className="text-xl md:text-3xl my-2 text-[left] mb-[4px]">
          Country Chart
        </h1>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="mb-[4px] w-[200px] border dark:text-black dark:bg-[rgba(255,255,255,0.5)] "
        >
          <option value="United States of America ">
            United States of America
          </option>
          <option value="Mexico">Mexico</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Russia">Russia</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </select>
        <div className="h-[500px] w-full">
          {chartData && <Bar data={chartData} options={chartOptions} />}
        </div>
      </div>
    </div>
  );
};

export default Country;
