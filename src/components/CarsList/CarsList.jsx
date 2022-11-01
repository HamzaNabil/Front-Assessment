import React from "react";
import Card from "../Card/Card";

function CarsList({ data, viewType, loading, error, handleSelectedCar }) {
  return (
    <div className="cars-list">
      <div
        className={`cards ${
          viewType === "vertical" ? "vertical" : "horizontal"
        }`}
      >
        {loading && <p>Loading...</p>}
        {data?.length === 0 && !loading && !error && <p> No Data</p>}
        {data?.map((car) => (
          <Card
            key={car.id}
            item={car}
            handleSelectedCar={() => handleSelectedCar(car)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
