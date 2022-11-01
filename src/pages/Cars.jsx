import React, { useEffect, useState } from "react";
import CarsList from "../components/CarsList/CarsList";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RiLayoutMasonryFill } from "react-icons/ri";
import Layout from "../Container/Layout";
import useFetch from "../hooks/useFetch";

function Cars() {
  const [filteredData, setFilteredData] = useState([]);
  const [viewType, setViewType] = useState(null);

  const url = "https://run.mocky.io/v3/2f05085f-32e2-452f-bbc1-0f9a32d6b9a2";
  const { data } = useFetch(url); // custom hook

  const handleTypeFilter = (e) => {
    let value = e.target.value;
    let newData = data?.cars?.filter((car) => car.type === value);
    setFilteredData(newData);
  };

  const handleLatestFilter = (e) => {
    let value = e.target.value;
    let newData = data?.cars?.filter((car) => car.latest === value);
    setFilteredData(newData);
  };

  const handleResetFilters = () => {
    setFilteredData(data);
  };

  const carTypes = ["toyta", "byd", "coupe"];

  return (
    <Layout>
      {console.log("filteredData", filteredData)}
      <div className="cars-page content__wrapper">
        <h2 className="cars__title"> Booking </h2>

        <div className="filter">
          <div>
            <select onChange={handleLatestFilter}>
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
            <select onChange={handleTypeFilter}>
              {carTypes?.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button className="reset-filter" onClick={handleResetFilters}>
              Reset Filters
            </button>
          </div>
          <div>
            <span
              onClick={() => setViewType("horizontal")}
              className={viewType == "horizontal" ? "active" : ""}
            >
              <RiLayoutMasonryFill fontSize={20} />
            </span>
            <span
              onClick={() => setViewType("vertical")}
              className={viewType == "vertical" ? "active" : ""}
            >
              <TbAdjustmentsHorizontal fontSize={20} />
            </span>
          </div>
        </div>
        <CarsList
          data={filteredData.length > 0 ? filteredData : data?.cars}
          viewType={viewType}
        />
      </div>
    </Layout>
  );
}

export default Cars;
