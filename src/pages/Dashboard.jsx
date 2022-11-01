import React from "react";
import Layout from "../Container/Layout";
import {
  arrowIcon,
  banner1,
  banner2,
  banner3,
  bloodIcon,
  car1,
  car2,
  car3,
  filledIcon,
  tierIcon,
} from "../assets/images";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { FaCogs } from "react-icons/fa";

import { BsStarHalf } from "react-icons/bs";

import "react-circular-progressbar/dist/styles.css";
function Dashboard() {
  return (
    <Layout>
      <div className="content">
        <div className="content__wrapper">
          <div className="widgets">
            <div className="widget-item purble-color">
              <span className="widget-item__icon">
                <img src={filledIcon} alt="" />
              </span>
              <h2 className="widget-item__title"> Energy </h2>
              <div style={{ width: 100, margin: "auto" }}>
                <CircularProgressbar
                  styles={buildStyles({
                    rotation: 0.67,
                    textSize: "20px",

                    // Colors
                    pathColor: `#fff`,
                    trailColor: "transparent",
                    textColor: "#fff",
                  })}
                  strokeWidth={8}
                  value={45}
                  text={`${45}%`}
                />
              </div>
            </div>

            <div className="widget-item orange-color">
              <span className="widget-item__icon ">
                <img src={arrowIcon} alt="" />
              </span>
              <h2 className="widget-item__title"> Range </h2>
              <div style={{ width: 100, margin: "auto" }}>
                <CircularProgressbar
                  styles={buildStyles({
                    rotation: 0.67,
                    textSize: "20px",

                    // Colors
                    pathColor: `rgba(255,126,134, ${66 / 100})`,
                    trailColor: "#fff",
                    textColor: "#FF7E86",
                  })}
                  strokeWidth={8}
                  value={35}
                  text={`${35}%`}
                />
              </div>
            </div>

            <div className="widget-item gray-purble-color">
              <span className="widget-item__icon">
                <img src={bloodIcon} alt="" />
              </span>
              <h2 className="widget-item__title"> Break fluid </h2>
              <div style={{ width: 100, margin: "auto" }}>
                <CircularProgressbar
                  styles={buildStyles({
                    rotation: 0.67,
                    textSize: "20px",

                    // Colors
                    pathColor: `rgba(161,98,247, ${66 / 100})`,
                    trailColor: "#fff",
                    textColor: "#a162f7",
                  })}
                  strokeWidth={8}
                  value={60}
                  text={`${60}%`}
                />
              </div>
            </div>

            <div className="widget-item yellow-color">
              <span className="widget-item__icon">
                <img src={tierIcon} alt="" />
              </span>
              <h2 className="widget-item__title"> Tier Wear </h2>
              <div style={{ width: 100, margin: "auto" }}>
                <CircularProgressbar
                  styles={buildStyles({
                    rotation: 0.67,
                    textSize: "20px",

                    // Colors
                    pathColor: `rgba(246,204,13, ${66 / 100})`,
                    trailColor: "#fff",
                    textColor: "#f6cc0d",
                  })}
                  strokeWidth={8}
                  value={26}
                  text={`${26}%`}
                />
              </div>
            </div>
          </div>

          <div className="banners">
            <div className="banner-item">
              <div className="banner-item__info">
                <h3>Apply for car Ioan!</h3>
                <p>This is a sample of a generated text</p>

                <button> Discover More </button>
              </div>
              <div className="banner-item__img">
                <img src={banner1} alt="" />
              </div>
            </div>

            <div className="banner-item">
              <div>
                <div className="banner-item__info">
                  <h3>
                    You have earned <span>20 </span> badges
                  </h3>
                </div>
                <div className="banner-item__img">
                  <img src={banner2} alt="" />
                </div>
              </div>
              <p>Hooray! Way to go Mohammed!</p>
            </div>

            <div className="banner-item">
              <div>
                <div className="banner-item__info">
                  <h3>
                    You have earned <span>1500 </span> Points
                  </h3>
                </div>
                <div className="banner-item__img">
                  <img src={banner3} alt="" />
                </div>
              </div>
              <p>Redeem and claim your rewards!</p>
            </div>
          </div>

          <div className="ads">
            <div className="ads-item">
              <span className="ads-item__txt">
                <BsArrowsFullscreen fontSize={20} color="#72767C" />
                64% Recommend
              </span>
              <div className="ads-item__img">
                <img src={car1} alt="" />
              </div>
              <h2 className="ads-item__title">Mini Cooper</h2>
              <div className="ads-item__desc">
                <div>
                  <TfiReload fontSize={12} color="#72767C" />
                  <span>123k</span>
                  <FaCogs fontSize={12} color="#72767C" />

                  <BsStarHalf fontSize={12} color="#72767C" />
                </div>
                <div>
                  <span>$32/h</span>
                </div>
              </div>
            </div>

            <div className="ads-item">
              <span className="ads-item__txt">
                <BsArrowsFullscreen fontSize={20} color="#72767C" />
                74% Recommend
              </span>
              <div className="ads-item__img">
                <img src={car2} alt="" />
              </div>
              <h2 className="ads-item__title">Porsche 911 Carrera</h2>
              <div className="ads-item__desc">
                <div>
                  <TfiReload fontSize={12} color="#72767C" />
                  <span>123k</span>
                  <FaCogs fontSize={12} color="#72767C" />

                  <BsStarHalf fontSize={12} color="#72767C" />
                </div>
                <div>
                  <span>$32/h</span>
                </div>
              </div>
            </div>

            <div className="ads-item">
              <span className="ads-item__txt">
                <BsArrowsFullscreen fontSize={20} color="#72767C" />
                74% Recommend
              </span>
              <div className="ads-item__img">
                <img src={car3} alt="" />
              </div>
              <h2 className="ads-item__title">Porsche 911 Carrera</h2>
              <div className="ads-item__desc">
                <div>
                  <TfiReload fontSize={12} color="#72767C" />
                  <span>123k</span>
                  <FaCogs fontSize={12} color="#72767C" />

                  <BsStarHalf fontSize={12} color="#72767C" />
                </div>
                <div>
                  <span>$32/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
