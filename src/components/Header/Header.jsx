import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { userImage } from "../../assets/images";

function Header({ setOpenSidebar, openSidebar }) {
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
        <div
          className="app-header__baricon"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? (
            <IoCloseOutline fontSize={20} />
          ) : (
            <FaBars fontSize={20} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
