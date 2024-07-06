import React from "react";
import Sector from "./sector";
import Likelihood from "./likelihood";

const SectorLikelihood = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-[100%] gap-[4px] md:grid-cols-[50%_50%]">
        <div>
          <Sector data={data} />
        </div>
        <div>
          <Likelihood data={data} />
        </div>
      </div>
    </>
  );
};

export default SectorLikelihood;
