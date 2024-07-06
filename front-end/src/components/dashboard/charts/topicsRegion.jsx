import React from "react";
import RegionChart from "./region";
import Topics from "./topics";

const TopicsRegion = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-[50%_50%] grid-cols-[100%]  w-full gap-[5px] px-[10px]">
        <div className="py-[6px] pb-[100px] px-[20px] rounded-[20px] mt-[5px] ml-[50px] md:shadow md:shadow-[rgba(0,0,0,0.4)] dark:md:shadow-[rgba(255,255,255,0.5)] overflow-hidden">
          <RegionChart data={data} />
        </div>
        <div className="py-[6px] pb-[100px] px-[20px] rounded-[20px] mt-[5px] ml-[50px] md:shadow md:shadow-[rgba(0,0,0,0.4)] dark:md:shadow-[rgba(255,255,255,0.5)] overflow-hidden">
          <Topics data={data} />
        </div>
      </div>
    </>
  );
};

export default TopicsRegion;
