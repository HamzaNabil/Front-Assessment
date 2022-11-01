import React from "react";
import SiteLogo from "../../assets/images";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaCogs } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Sidebar({ openSidebar }) {
  return (
    <div className={`app-sidebar ${openSidebar ? "showSide" : ""}`}>
      <div className="app-sidebar__top">
        <div className="app-sidebar__logo">
          <SiteLogo />
        </div>
        <nav className="list">
          <ul>
            <li className="list__item">
              <Link
                to="/"
                className={window.location.pathname === "/" ? "active" : ""}
              >
                <MdOutlineDashboard fontSize={20} />
                <span>
                  <FormattedMessage
                    id="sidebar.dashboard"
                    defaultMessage={"dashboard"}
                  />
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link
                to="/cars"
                className={window.location.pathname === "/cars" ? "active" : ""}
              >
                <AiOutlineCar fontSize={20} />
                <span>
                  <FormattedMessage id="sidebar.cars" defaultMessage={"cars"} />
                </span>
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
