import React from "react";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { car1Card, car2Card, car3Card, car4Card } from "../../assets/images";

const images = {
  car1Card,
  car2Card,
  car3Card,
  car4Card,
};

function Card({ item, handleSelectedCar }) {
  return (
    <div className="card-item" onClick={handleSelectedCar}>
      <div className="card-item__header">
        <h2 className="card-item__title">
          {item.title}
          <span>{item.type}</span>
        </h2>
        <FiHeart fontSize={20} />
      </div>
      <div className="card-item__img">
        <img src={images[item.image]} alt="" />
      </div>
      <div className="card-item__desc">
        <div>
          <span>
            <AiOutlineUser fontSize={16} /> {item.passenger}
          </span>
          <span>
            <FiRefreshCcw fontSize={16} />
            {item.geer}
          </span>
        </div>
        <p>
          {item.price}
          <span>{item.years}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
