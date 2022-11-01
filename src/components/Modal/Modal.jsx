import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

import { car1Card, car2Card, car3Card, car4Card } from "../../assets/images";

const images = {
  car1Card,
  car2Card,
  car3Card,
  car4Card,
};

function Modal({ item, handleCloseModal }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <span className="close" onClick={handleCloseModal}>
          x
        </span>
        <h2>{item?.title}</h2>
        <span>{item?.type} </span>
        <img src={images[item?.image]} alt="" />
        <div className="details">
          <div>
            <AiOutlineUser fontSize={16} /> {item?.passenger}
          </div>
          <div>
            <FiRefreshCcw fontSize={16} />
            {item?.geer}
          </div>
          <p>
            {item?.price}
            <span>{item?.years}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
