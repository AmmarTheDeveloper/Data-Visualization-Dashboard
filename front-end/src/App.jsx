import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/dashboard/dashboard";
import IntensityChart from "./components/dashboard/charts/intensity";
import { LoginWrapper } from "./components/Login/LoginWrapper";
import { fetchData } from "./components/dashboard/fetchData";
import TopicsRegion from "./components/dashboard/charts/topicsRegion";
import Relevance from "./components/dashboard/charts/relevance";
import SectorLikelihood from "./components/dashboard/charts/sectorLikelihood";
import Country from "./components/dashboard/charts/country";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoginWrapper>
              <Login />
            </LoginWrapper>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            element={
              <>
                <h1 className="text-center text-2xl md:text-4xl font-medium ">
                  Dashboard
                </h1>
                <h2 className="text-center text-md font-medium">
                  You can see all charts here or individually by clicking on the
                  links in the sidebar. <br /> It is fully responsive can be
                  viewed on any device.
                </h2>
                <IntensityChart data={data} />
                <TopicsRegion data={data} />
                <Relevance data={data} />
                <SectorLikelihood data={data} />
                <Country data={data} />
              </>
            }
          />
          <Route path="intensity" element={<IntensityChart data={data} />} />
          <Route path="topics-region" element={<TopicsRegion data={data} />} />
          <Route path="relevance" element={<Relevance data={data} />} />
          <Route
            path="sector-likelihood"
            element={<SectorLikelihood data={data} />}
          />
          <Route path="country" element={<Country data={data} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
