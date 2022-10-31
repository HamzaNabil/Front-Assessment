import React from "react";
import CarsList from "../components/CarsList/CarsList";
import Header from "../components/Header/Header";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RiLayoutMasonryFill } from "react-icons/ri";
import Layout from "../Container/Layout";

function Cars() {
  return (
    <Layout>
      <div className="cars-page content__wrapper">
        <h2 className="cars__title"> Booking </h2>

        <div className="filter">
          <div>
            <select>
              <option>New</option>
              <option>Old</option>
            </select>
            <select>
              <option>Toyota</option>
              <option>Byd</option>
            </select>
          </div>
          <div>
            <RiLayoutMasonryFill fontSize={20} />
            <TbAdjustmentsHorizontal fontSize={20} />
          </div>
        </div>
        <CarsList />
      </div>
    </Layout>
  );
}

export default Cars;
