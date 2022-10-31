import React from "react";
import SiteLogo from "../../assets/images";
import "./Sidebar.scss";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar__top">
        <div className="app-sidebar__logo">
          <SiteLogo />
        </div>
        <nav className="list">
          <ul>
            <li className="list__item">
              <Link to="/">
                <MdOutlineDashboard fontSize={20} />
                <span> Dashboard </span>
              </Link>
            </li>
            <li className="list__item">
              <Link to="/cars">
                <AiOutlineCar fontSize={20} />
                <span> Cars </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="app-sidebar__bottom">
        <nav className="list">
          <ul>
            <li className="list__item">
              <a href="#">
                <FaCogs fontSize={20} />
                <span> Settings </span>
              </a>
            </li>
            <li className="list__item">
              <a href="#">
                <BiLogOut fontSize={20} />
                <span> logout </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
