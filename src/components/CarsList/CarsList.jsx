import React from "react";
import Card from "../Card/Card";

function CarsList({ data, viewType }) {
  return (
    <div className="cars-list">
      <div
        className={`cards ${
          viewType === "vertical" ? "vertical" : "horizontal"
        }`}
      >
        {data?.map((car) => (
          <Card key={car.id} item={car} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
