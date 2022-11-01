import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { FaCogs } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { car1, car2, car3 } from "../../assets/images";

const images = { car1, car2, car3 };
function Ads({ item }) {
  return (
    <div className="ads-item">
      <span className="ads-item__txt">
        <BsArrowsFullscreen fontSize={20} color="#72767C" />
        {item.recommend}
      </span>
      <div className="ads-item__img">
        <img src={images[item.image]} alt="" />
      </div>
      <h2 className="ads-item__title">{item.title}</h2>
      <div className="ads-item__desc">
        <div>
          <TfiReload fontSize={12} color="#72767C" />
          <span>{item.views}</span>
          <FaCogs fontSize={12} color="#72767C" />

          <BsStarHalf fontSize={12} color="#72767C" />
        </div>
        <div>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Ads;
