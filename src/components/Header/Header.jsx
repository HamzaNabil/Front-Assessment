import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { userImage } from "../../assets/images";
import "./Header.scss";

function Header() {
  return (
    <div className="app-header">
      <div className="app-header__left">
        <div className="search-wrapper">
          <form>
            <div className="form-group">
              <CiSearch fontSize={20} />
              <input
                className="search-input"
                type="text"
                placeholder="Search or type"
                autoFocus
              />
            </div>
          </form>
        </div>
      </div>
      <div className="app-header__right">
        <div className="app-header__notification">
          <MdOutlineNotificationsNone fontSize={20} color="#7C7C8D" />
          <span className="danger-icon"></span>
        </div>
        <div className="app-header__username">
          <img src={userImage} alt="user image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
