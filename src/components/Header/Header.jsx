import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { userImage } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { langAction, searchAction } from "../../redux/actions";

function Header({ setOpenSidebar, openSidebar }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
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
                value={state.search.term}
                onChange={(e) => dispatch(searchAction(e.target.value))}
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
        <span
          className={state?.language?.lang === "ar" ? "active" : ""}
          onClick={() => dispatch(langAction("ar"))}
        >
          Ar
        </span>
        <span
          className={state?.language?.lang === "en" ? "active" : ""}
          onClick={() => dispatch(langAction("en"))}
        >
          En
        </span>
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
