import React from "react";
import {
  arrowIcon,
  bloodIcon,
  filledIcon,
  tierIcon,
} from "../../assets/images";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const images = { arrowIcon, bloodIcon, filledIcon, tierIcon };

function Widgets({ item }) {
  return (
    <div className="widget-item">
      <span className="widget-item__icon">
        <img src={images[item.icon]} alt="" />
      </span>
      <h2 className="widget-item__title"> {item.title} </h2>
      <div style={{ width: 100, margin: "auto" }}>
        <CircularProgressbar
          styles={buildStyles({
            rotation: 0.67,
            textSize: "20px",

            // Colors
            pathColor: item.pathColor,
            trailColor: "transparent",
            textColor: item.color,
          })}
          strokeWidth={8}
          value={item.progress}
          text={`${item.progress}%`}
        />
      </div>
    </div>
  );
}

export default Widgets;
