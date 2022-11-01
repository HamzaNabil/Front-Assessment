import React, { useEffect, useState } from "react";
import CarsList from "../components/CarsList/CarsList";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RiLayoutMasonryFill } from "react-icons/ri";
import Layout from "../Container/Layout";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";

function Cars() {
  const [filteredData, setFilteredData] = useState([]);
  const [viewType, setViewType] = useState(null);
  const [carDetails, setCarDetails] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const state = useSelector((state) => state.search);

  const url = "https://run.mocky.io/v3/e8f2c6b7-4643-447b-9123-dd225d7138cb";
  const { data, loading, error } = useFetch(url); // custom hook

  const handleTypeFilter = (e) => {
    let value = e.target.value;
    if (data?.cars?.length > 0) {
      let newData = [...data?.cars];
      if (value) {
        newData = data?.cars?.filter((car) => car.type === value);
      }
      setFilteredData(newData);
    }
  };

  const handleLatestFilter = (e) => {
    let value = e.target.value;
    if (data?.cars?.length > 0) {
      let newData = [...data?.cars];
      if (value) {
        newData = data?.cars?.filter((car) => car.latest === value);
      }
      setFilteredData(newData);
    }
  };

  const handleResetFilters = () => {
    setFilteredData(data?.cars);
  };

  const handleSelectedCar = (car) => {
    setCarDetails(car);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const carTypes = ["toyta", "byd", "coupe"];

  // First load
  useEffect(() => {
    if (data) {
      setFilteredData(data?.cars);
    }
  }, [data]);

  useEffect(() => {
    const searchData = data?.cars?.filter((car) =>
      car.title.toLowerCase().includes(state.term.toLowerCase())
    );
    setFilteredData(searchData);
  }, [state.term]);

  return (
    <Layout>
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
              className={viewType === "horizontal" ? "active" : ""}
            >
              <RiLayoutMasonryFill fontSize={20} />
            </span>
            <span
              onClick={() => setViewType("vertical")}
              className={viewType === "vertical" ? "active" : ""}
            >
              <TbAdjustmentsHorizontal fontSize={20} />
            </span>
          </div>
        </div>
        <CarsList
          loading={loading}
          error={error}
          data={filteredData?.length > 0 ? filteredData : []}
          viewType={viewType}
          handleSelectedCar={handleSelectedCar}
        />

        {showModal && (
          <Modal item={carDetails} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </Layout>
  );
}

export default Cars;
