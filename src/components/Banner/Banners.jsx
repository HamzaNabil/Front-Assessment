import React from "react";
import { banner1, banner2, banner3 } from "../../assets/images";

function Banners() {
  return (
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
  );
}

export default Banners;
