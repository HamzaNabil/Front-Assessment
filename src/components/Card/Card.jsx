import React from "react";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import "./Card.scss";
import { car1Card } from "../../assets/images";

function Card() {
  return (
    <div className="card-item">
      <div className="card-item__header">
        <h2 className="card-item__title">
          Porshe 718 Cayman S<span>Coupe</span>
        </h2>
        <FiHeart fontSize={20} />
      </div>
      <div className="card-item__img">
        <img src={car1Card} alt="" />
      </div>
      <div className="card-item__desc">
        <div>
          <span>
            <AiOutlineUser fontSize={16} /> 4
          </span>
          <span>
            <FiRefreshCcw fontSize={16} />
            Manual
          </span>
        </div>
        <p>
          $400<span>/d</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
